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
      'image': ['',Validators.required],
      'name': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'description': ['',Validators.compose([Validators.required, Validators.minLength(10)])],
      'contributor': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'ingredients': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'date': ['',Validators.compose([Validators.required, Validators.pattern(/(0-11-9[\\/ -\.]0-31-9[\\/ -\.]\d{2,4})/)])],
      'estimatedCalories': ['',Validators.compose([Validators.required, Validators.minLength(2)])],
      'directions': ['',Validators.compose([Validators.required, Validators.minLength(15)])],
      'category': ['',Validators.compose([Validators.required, Validators.minLength(4)])]
    })
    
  }

  ngOnInit() {

  }
  
  public received: boolean = false;
  public error: boolean = false;
  
  onSubmit(x:FormGroup):void{
    this.email.sendMail(x);
    if(this.email.emailVerify.hasError === true){
      this.error = true;
    }else{
      this.received = true;
    }
  }
 
}

