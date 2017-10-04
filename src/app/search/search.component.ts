import { DbTalkerService } from '../db-talker.service';

import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public queryText: String;

  constructor() { 
    
  }

  ngOnInit() {
  }

  runSearch(x:String):void{
    console.log(this.queryText);
  }
}
