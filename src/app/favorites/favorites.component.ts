import { Component, OnInit, Input, Output } from '@angular/core';
import { DbTalkerService } from './../db-talker.service';

import { Meal } from './../meal.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

public favorites: Meal[];
public data: any;
  
  constructor(private dbTalker: DbTalkerService){
        //Pulls in favorites from database service and sets favorites
        dbTalker.SearchTopThreeFavorites(this.data,val =>{
          return this.favorites = val;
        });
  }

  ngOnInit(){
   
  }
}
