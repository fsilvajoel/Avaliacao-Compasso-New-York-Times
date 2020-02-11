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
  // newsScience = [];
  // items = [];
  // pageOfItems: Array<any>;

  constructor(private newsService : NewsService) { }

 
  ngOnInit(): void {
    this.showNewsTech();
    // this.showNewsScience();
    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    //console.log(this.news);
  }
  showNewsTech() {
    this.newsService.getNewsTech().subscribe((data: any[])=>{
      this.newsTech = data['results'];
      console.log(data['results'].length);
      console.log(data['results']);
    });
  
  }
  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;
  // }  
  
}
