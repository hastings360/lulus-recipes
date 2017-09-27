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
  public imageToSend: File;
  
  onSubmit(x:FormGroup,y:File):void{
    
    this.email.sendMail(x,y);


    if(this.email.emailVerify.hasError === true){
      this.error = true;
    }else{
      this.received = true;
    }
  }

  updateImageFile(x:object):void{
    let reader = new FileReader;
    reader.onload = this.imageLoader;
    reader.readAsDataURL(x[0]);
    this.imageToSend = x[0];

    this.imageUploaded = true;
  }

  imageLoader(e:any):any{
    let imageTag = document.getElementById('uploaded');
    imageTag.setAttribute('src', e.target.result);
  }
 
}

