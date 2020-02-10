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
  news = [];
  
  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.showNewsTech();
    this.showNewsScience();
    //console.log(this.news);
  }
  showNewsTech() {
    this.newsService.getNewsTech().subscribe((data: any[])=>{
      this.news = data['results'];
      console.log(data['results'].length);
    });
  }
  showNewsScience(){
    this.newsService.getNewsScience().subscribe((data: any[])=>{
      this.news = data['results'];
      console.log(data['results'].length);
    });
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
