import { Component, OnInit, Input } from '@angular/core';

import { Meal } from './../../meal.model';

@Component({
  selector: 'app-meal-info-view',
  templateUrl: './meal-info-view.component.html',
  styleUrls: ['./meal-info-view.component.css']
})
export class MealInfoViewComponent implements OnInit {

@Input() specifiedMeal: Meal;

public liked: string = localStorage.getItem('lulu-liked');

  constructor() { 
    
  }

  ngOnInit() {
  }

  addLike(){
    localStorage.setItem('lulu-liked','liked');
    
  }

}
