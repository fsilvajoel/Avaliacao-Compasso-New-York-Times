import { ListTechnologyComponent } from './list-technology/list-technology.component';
import { from } from 'rxjs';
import { ListScienceComponent } from './list-science/list-science.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'home', component: app.Component },
  { path: 'science', component: ListScienceComponent },
  {path: 'technology', component: ListTechnologyComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
