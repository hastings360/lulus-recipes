import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContributeComponent } from './contribute/contribute.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { SingleFullViewComponent } from './meal-displays/single-full-view/single-full-view.component';
import { CategoryViewComponent } from './meal-displays/category-view/category-view.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
  { path: 'welcome', component: WelcomeComponent, data: {title: 'Welcome'}},
  //{ path: 'meal-view/:itemNumber', component: SingleFullViewComponent, data: {title: 'Meal View'}},
  { path: 'category-view/:category', component: CategoryViewComponent, data: {title: 'Category'}},
  { path: 'single-full-view/:name', component: SingleFullViewComponent, data: {title: 'Meal'}},
  { path: 'contribute', component: ContributeComponent, data: {title: 'Contribute'}},
  { path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  { path: 'about', component: AboutComponent, data: {title: 'About'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
