import { Component, OnInit, Inject } from '@angular/core';
import { Config } from 'protractor';
import { NewsService} from '../news.service'
import { from } from 'rxjs';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

@Component({
  selector: 'app-list-technology',
  templateUrl: './list-technology.component.html',
  styleUrls: ['./list-technology.component.css']
})

export class ListTechnologyComponent implements OnInit {
  newsTech = [];
  
  // constructor(private newsService : NewsService, public dialog: MatDialog) { }
  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.showNewsTech();
  }
  // openDialog() {
  //   this.dialog.open(DialogDataExampleDialog, {
  //     data: {
  //       animal: 'panda'
  //     }
  //   });
  // }
  showNewsTech() {
    this.newsService.getNewsTech().subscribe((data: any[])=>{
      this.newsTech = data['results'];
    });
  }
}
