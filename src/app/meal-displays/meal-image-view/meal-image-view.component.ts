import { Meal } from './../../meal.model';

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-meal-image-view',
  templateUrl: './meal-image-view.component.html',
  styleUrls: ['./meal-image-view.component.css']
})
export class MealImageViewComponent implements OnInit {

@Input() specifiedMeal: Meal;

  constructor() { 
  }

  ngOnInit() {
  }

}
