import { Event } from '@angular/router';
import { Http,Response } from '@angular/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { EmailService } from '../email.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  public contributeForm: FormGroup;
  
  constructor(fb: FormBuilder,private email: EmailService){
    this.contributeForm = fb.group({
      'name': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'description': ['',Validators.compose([Validators.required, Validators.minLength(10)])],
      'contributor': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'ingredients': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'date': ['',Validators.compose([Validators.required, Validators.pattern(/^\d{2}[./-]\d{2}[./-]\d{4}$/)])],
      'estimatedCalories': ['',Validators.compose([Validators.required, Validators.minLength(2)])],
      'directions': ['',Validators.compose([Validators.required, Validators.minLength(15)])],
      'category': ['',Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }

  ngOnInit() {

  }
  
  public received: boolean = false;
  public error: boolean = false;
  public imageUploaded: boolean = false;
  public imageToAPI;
  
  onSubmit(x:FormGroup):void{
    let data = JSON.stringify(x);//Converts FormGroup data into JSON string for http.post
    let mailObject = new FormData();

    mailObject.append('data',data);//appends data to mailObject
    mailObject.append('image',this.imageToAPI);//appends data to mailObject
    
    this.email.sendMail(mailObject);
    if(this.email.emailVerify.hasError === true){
      this.error = true;
    }else{
      this.received = true;
    }
  }
  //excepts and reads the image file object
  updateImageFile(x:object):void{
    //sets uploaded image to view
    let reader = new FileReader;
    reader.onload = this.imageLoader;
    reader.readAsDataURL(x[0]);
    this.imageUploaded = true;

    //save image to imageToAPI
    this.imageToAPI = x[0];
  }
  //Loads image to the img element
  imageLoader(e:any):any{
    let imageTag = document.getElementById('uploaded');
    imageTag.setAttribute('src', e.target.result);
  }

}

