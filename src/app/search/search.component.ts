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
  public data: any;
  private resultsList = document.getElementById("results");
  

  constructor(fb: FormBuilder,private dbTalker: DbTalkerService) { 
    this.searchForm = fb.group({
      'query': []
    })
  }

  ngOnInit() {
  }

  runSearch(incomingQueryObject:FormGroup):void{
    
    let queryToJSON = JSON.parse(JSON.stringify(incomingQueryObject));
    let queryRequest = queryToJSON.query;
    let queryResults: Meal[];
    let resultsList = document.getElementById("results");
    
    this.dbTalker.QuerySearchMeals(queryRequest,this.data,val => {
      console.log(val);
      return queryResults = val;
    })

    for(let y in queryResults){
      console.log(y);
    }
  }
}
