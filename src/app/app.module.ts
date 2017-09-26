import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SingleFullViewComponent } from './meal-displays/single-full-view/single-full-view.component';
import { BriefViewComponent } from './meal-displays/brief-view/brief-view.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TopTenCategoriesComponent } from './top-ten-categories/top-ten-categories.component';
import { CategoryViewComponent } from './meal-displays/category-view/category-view.component';
import { DbTalkerService } from './db-talker.service';
import { EmailService } from './email.service';
import { ContributeComponent } from './contribute/contribute.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MealInfoViewComponent } from './meal-displays/meal-info-view/meal-info-view.component';
import { MealImageViewComponent } from './meal-displays/meal-image-view/meal-image-view.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BriefViewComponent,
    FavoritesComponent,
    SingleFullViewComponent,
    TopTenCategoriesComponent,
    CategoryViewComponent,
    ContributeComponent,
    ContactComponent,
    AboutComponent,
    MealInfoViewComponent,
    MealImageViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [Title, DbTalkerService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }