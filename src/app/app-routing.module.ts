import { ListTechnologyComponent } from './list-technology/list-technology.component';
import { from } from 'rxjs';
import { ListScienceComponent } from './list-science/list-science.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  // { path: 'home', component: app.Component },
  { path: 'science', component: ListScienceComponent },
  {path: 'technology', component: ListTechnologyComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
