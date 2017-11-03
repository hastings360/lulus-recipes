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
  public queryResults: Meal[];
  public resultsShow: Boolean = false;
  public resultsFound: Boolean = false;
  public resultsNotFound: Boolean = false;
  

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
    console.log(queryRequest);
    
    this.dbTalker.QuerySearchMeals(queryRequest,this.data,val => {
        
      if(val.length > 0){
          this.queryResults = [];
          this.queryResults = val;
          this.resultsShow = true;
          this.resultsFound = true;
          this.resultsNotFound = false;
        }else{
          this.queryResults = [];
          this.queryResults.push({ _id: 1,imageName:"",name: "No results found",description: "",contributor: "",
          ingredients: [""],contributionDate: "",estimatedCalories: 0,directions: "",category: "",likes: 0});
          this.resultsShow = true;
          this.resultsNotFound = true;
          this.resultsFound = false;
        }
    })
  }

  resetResults():void{
    this.queryResults = [];
    this.resultsShow = false;
  }
}
