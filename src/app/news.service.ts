import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class NewsService {
  nytimesUrl ='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1';

  // APIKEY ='AHHA6AM6e6tGD5NJ9ogCpbJwgGWFu6vS';

  constructor(private http: HttpClient) { }
  getNews(){
    return this.http.get<any[]>(this.nytimesUrl);
  }
  // getNews(){
  //   return this.http.get(this.nytimesUrl)
  //   .subscribe (data =>{
  //     data
  //   })
  // }
}
