import { Component, OnInit, Input, Output } from '@angular/core';

import { Meal } from '../../meal.model';

@Component({
  selector: 'app-brief-view',
  templateUrl: './brief-view.component.html',
  styleUrls: ['./brief-view.component.css']
})
export class BriefViewComponent implements OnInit {

  @Input() briefMeal: Meal;

  constructor() { 
  }

  ngOnInit() { }

}
