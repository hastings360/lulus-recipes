import { Component, OnInit, Input } from '@angular/core';

import { Meal } from './../../meal.model';

@Component({
  selector: 'app-meal-info-view',
  templateUrl: './meal-info-view.component.html',
  styleUrls: ['./meal-info-view.component.css']
})
export class MealInfoViewComponent implements OnInit {

@Input() specifiedMeal: Meal;

private liked: string = localStorage.getItem('lulu-liked');
private likeImage = document.getElementById('like');
private likeText = document.getElementById('like-text');

  constructor() { 
    if(this.liked == 'liked'){
      console.log(typeof this.likeImage);
      console.log(this.likeText);

      this.likeText.innerHTML = "Liked";

    }
  }

  ngOnInit() {
  }

  addLike(){
    localStorage.setItem('lulu-liked','liked');
    
  }

}
