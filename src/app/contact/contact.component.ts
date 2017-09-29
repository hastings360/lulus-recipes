import { Http,Response } from '@angular/http';
import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
    
  
  constructor(fb: FormBuilder,private email: EmailService){
    this.contactForm = fb.group({
      'name': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['',Validators.compose([Validators.required, Validators.pattern(/.+@.+/)])],
      'phone': ['',Validators.compose([Validators.required, Validators.pattern(/\d{10}/)])],
      'message': ['',Validators.compose([Validators.required, Validators.minLength(15)])]
    })
    
  }

  ngOnInit() {

  }

  public received: boolean = false;
  public error: boolean = false;
  public imageToSend = null;
  
  onSubmit(x:FormGroup):void{
    let data = JSON.stringify(x);
    let mailObject = new FormData();
    
    mailObject.append('data',data);//appends data to mailObject

    this.email.sendMail(mailObject);
    if(this.email.emailVerify.hasError === true){
      this.error = true;
    }else{
      this.received = true;
    }
  }
  
 
}
