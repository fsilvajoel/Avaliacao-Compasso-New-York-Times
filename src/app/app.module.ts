import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
// import { JwPaginationComponent } from 'jw-angular-pagination';
import { ListScienceComponent } from './list-science/list-science.component';
import { ListTechnologyComponent } from './list-technology/list-technology.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    ListScienceComponent,
    ListTechnologyComponent,
    // JwPaginationComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
