import { Component, OnInit, Input } from '@angular/core';

import { Meal } from './../../meal.model';

@Component({
  selector: 'app-meal-info-view',
  templateUrl: './meal-info-view.component.html',
  styleUrls: ['./meal-info-view.component.css']
})
export class MealInfoViewComponent implements OnInit {

@Input() specifiedMeal: Meal;

public liked: string = '';//localStorage.getItem(this.specifiedMeal._id);

  constructor() { 
    
  }

  ngOnInit() {
  }

  addLike(){
    //localStorage.setItem(this.specifiedMeal._id,'liked');
    console.log(this.specifiedMeal._id);
  }

}
