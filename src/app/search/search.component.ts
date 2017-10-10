import { Meal } from './../meal.model';
import { DbTalkerService } from '../db-talker.service';

import { FormGroup,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public queryText: String;
  public searchForm: FormGroup;
  public queryResults: Meal[];
  public data: any;
  private dbTalker: DbTalkerService;

  constructor(fb: FormBuilder) { 
    this.searchForm = fb.group({
      'query': []
    })
  }

  ngOnInit() {
  }

  runSearch(x:FormGroup):void{
    //Pulls in favorites from database service and sets favorites
    this.dbTalker.QuerySearchMeals(x,this.data,val =>{
      return this.queryResults = val;
    });
  }
}
