import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  public constructor(private titleService: Title){}
  
    public setTitle( newTitle: string){
      this.titleService.setTitle(newTitle);
    }

}