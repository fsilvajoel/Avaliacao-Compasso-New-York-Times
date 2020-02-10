import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { NewsService} from '../news.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  // news = [
  //   {id: 1, nome: 'joel'},
  //   {id: 2, nome: 'Anderson'},
  //   {id: 3, nome: 'Carlos'},

  // ];
  news: Array<any>;
  
  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.showNews();
  }
  showNews() {
    this.newsService.getNews().subscribe(dados => this.news = dados);
      //  = {
      //     heroesUrl: data['heroesUrl'],
      //     textfile:  data['textfile']
      // });
  }
  // showNews(){
  //   this.NewsService.getNews().subscribe((data: news) => this.news ={

  //   })
  // };

  // getConfigResponse(): Observable<HttpResponse<Config>> {
  //   return this.http.get<Config>(
  //     this.configUrl, { observe: 'response' });
  // }
}
