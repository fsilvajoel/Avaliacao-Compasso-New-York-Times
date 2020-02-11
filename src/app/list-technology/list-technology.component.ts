import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { NewsService} from '../news.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-list-technology',
  templateUrl: './list-technology.component.html',
  styleUrls: ['./list-technology.component.css']
})
export class ListTechnologyComponent implements OnInit {
  newsTech = [];
  
  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.showNewsTech();
  }
  showNewsTech() {
    this.newsService.getNewsTech().subscribe((data: any[])=>{
      this.newsTech = data['results'];
    });
  }
}
