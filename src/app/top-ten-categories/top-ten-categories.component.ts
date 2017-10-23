import { Component, OnInit } from '@angular/core';

import { DbTalkerService } from './../db-talker.service';

@Component({
  selector: 'app-top-ten-categories',
  templateUrl: './top-ten-categories.component.html',
  styleUrls: ['./top-ten-categories.component.css']
})
export class TopTenCategoriesComponent implements OnInit {

  public topTenCategories = [];
  public data;

  constructor(private dbTalker: DbTalkerService){
    //Pulls in favorites from database service and sets favorites
    dbTalker.SearchTopTenCategories(this.data,val =>{
      console.log(val);
      return this.topTenCategories = val;
      
    });
    
}

  ngOnInit() { }

}
