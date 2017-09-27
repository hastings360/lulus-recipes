import { Subject,BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class EmailService {

  constructor(private http: Http) { 
  
  }

   public emailVerify: Subject<boolean> = new BehaviorSubject<boolean>(false);

   public sendMail(x: FormGroup): void{
    let mailData = x;
    
    this.http.post("/api/recipe-mail", mailData).subscribe(
      (res: Response) => {
        console.log("mail sent successfully");
      },
      (err: any) => {
        console.log(err);
        this.emailVerify.hasError = true;
      }/*,
      () => {
        return null;
      }*/  //Not sure this needs to be here
    );
  }
}
