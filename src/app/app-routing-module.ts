import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContributeComponent } from './contribute/contribute.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { SingleFullViewComponent } from './meal-displays/single-full-view/single-full-view.component';
import { CategoryViewComponent } from './meal-displays/category-view/category-view.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
  { path: 'welcome', component: WelcomeComponent, data: {title: 'Recipe Finder: Welcome'}},
  { path: 'meal-view/:itemNumber', component: SingleFullViewComponent, data: {title: 'Recipe Finder: Meal View'}},
  { path: 'category-view/:category', component: CategoryViewComponent, data: {title: 'Recipe Finder: Category View'}},
  { path: 'single-full-view/:name', component: SingleFullViewComponent, data: {title: 'Recipe Finder: Single Full View'}},
  { path: 'contribute', component: ContributeComponent, data: {title: 'Recipe Finder: Contribute'}},
  { path: 'contact', component: ContactComponent, data: {title: 'Recipe Finder: Contact'}},
  { path: 'about', component: AboutComponent, data: {title: 'Recipe Finder: About'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Title]
})
export class AppRoutingModule { }