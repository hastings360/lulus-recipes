import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,URLSearchParams } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class DbTalkerService {

  constructor(private http: Http){ 

  }
  
  //calls the recipe-favorties api, which returns top three favorite meals
  public SearchTopThreeFavorites(out,callback):any{
    out = out || "init top three favorites";
    this.http.get("/api/recipe-favorites").subscribe(
      (res: Response) => {
        out = res.json();
        return callback(out);
      },
      (err: any) => {
        console.log("on db-talker component SearchTopThreeFavorites");
        console.log(err);
      }) 
  };

  //calls the recipe-top-ten-categories api, which returns top ten categories
  public SearchTopTenCategories(out,callback):any{
    out = out || "init top ten categories";
    this.http.get("/api/recipe-top-ten-categories").subscribe(
      (res: Response) => {
        out = res.json();
        return callback(out);
      },
      (err: any) => {
        console.log("on db-talker component SearchTopTenCategories");
        console.log(err);
      })
  };

  //calls the recipe-categories api, which returns all categories
  public SearchAllCategories(out,callback):any{
    out = out || "init all categories";
    this.http.get("/api/recipe-all-categories").subscribe(
      (res: Response) => {
        out = res.json();
        return callback(out);
      },
      (err: any) => {
        console.log("on db-talker component SearchAllCategories");
        console.log(err);
      })
  };

  //calls the recipe-meals-by-category, which returns meals that have specific categories
  public SearchMealsByCategory(categoryPassedInByUrl,out,callback):any{
    out = out || "init meals by category";

    let params: URLSearchParams = new URLSearchParams();
      params.set('category', categoryPassedInByUrl);
    let requestOptions = new RequestOptions();
      requestOptions.search = params;

    this.http.get("/api/recipe-meals-by-category", requestOptions).subscribe(
      (res: Response) => {
        out = res.json();
        return callback(out);
      },
      (err: any) => {
        console.log("on db-talker component SearchMealsByCategory");
        console.log(err);
      })
  };

  //calls the recipe-meal-by-name, which returns a meal that matches the input name
  public SearchMealByName(mealName,out,callback):any{
    out = out || "init meal by name";

    let params: URLSearchParams = new URLSearchParams();
      params.set('name', mealName);
    let requestOptions = new RequestOptions();
      requestOptions.search = params;

    this.http.get("/api/recipe-meal-by-name", requestOptions).subscribe(
      (res: Response) => {
        out = res.json();
        return callback(out);
      },
      (err: any) => {
        console.log("on db-talker component SearchMealByName");
        console.log(err);
      })
  };

  //calls the query-search-by-name, which returns a list of matching meals
  public QuerySearchMeals(query,out,callback):any{
    out = out || "init query search by input";

    let params: URLSearchParams = new URLSearchParams();
      params.set('searchText', query);
    let requestOptions = new RequestOptions();
      requestOptions.search = params;

    this.http.get("/api/query-search-by-input", requestOptions).subscribe(
      (res: Response) => {
        out = res.json();
        return callback(out);
      },
      (err: any) => {
        console.log("on db-talker component QuerySearchMeals");
        console.log(err);
      })
  };

  //ads one to specified meal by _id
  public IncreaseLikes(query): void{
    let toBeSent = JSON.stringify(query);
    
    
    this.http.post("/api/increase-likes", toBeSent).subscribe(
      (res: Response) => {
        console.log("increase likes success");
        console.log(res);
      },
      (err: any) => {
        console.log("increase likes operation failed");
        console.log(err);
      })
  };
}
/*= [
        new Meal(
          'baked_turkey_wrap.jpg',
          'Baked Turkey Wrap',
          'Baked turkey with asparagus and condiments',
          'Larry Hastings',
          ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
          '06/06/2017',
          500,
          'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
          'chicken',
          29
          ),
        new Meal(
          'baked_turkey_wrap.jpg',
          'Baked Turkey Wrap',
          'Baked turkey with asparagus and condiments',
          'Larry Hastings',
          ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
          '06/06/2017',
          500,
          'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
          'chicken',
          59
          ),
        new Meal(
          'baked_turkey_wrap.jpg',
          'Baked Chicken Wrap',
          'Baked turkey with asparagus and condiments',
          'Larry Hastings',
          ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
          '06/06/2017',
          500,
          'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
          'turkey',
          35
          ),
        new Meal(
          'baked_turkey_wrap.jpg',
          'Baked Goose Wrap',
          'Baked turkey with asparagus and condiments',
          'Larry Hastings',
          ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
          '06/06/2017',
          500,
          'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
          'chicken',
          5
          ),
        new Meal(
          'baked_turkey_wrap.jpg',
          'Chincilla Crap',
          'Baked turkey with asparagus and condiments',
          'Larry Hastings',
          ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
          '06/06/2017',
          500,
          'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
          'chicken',
          2
          )
      ];*/