import { DbTalkerService } from './../../db-talker.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { Meal } from './../../meal.model';
import { BriefViewComponent } from './../brief-view/brief-view.component';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  public categoryPassedInByUrl: string;
  public specifiedCategoryMeals: Meal[];
  public data: any;
  

  constructor(private route: ActivatedRoute, private dbTalker: DbTalkerService) { 
    route.params.subscribe(params => { this.categoryPassedInByUrl = params['category']; });
   
    dbTalker.SearchMealsByCategory(this.categoryPassedInByUrl,this.data,val =>{
      return this.specifiedCategoryMeals = val;
    });
     
  }

  ngOnInit() { 
    
    
  }

  
  

}
