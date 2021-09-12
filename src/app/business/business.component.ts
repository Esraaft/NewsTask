import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  businessNews:any[] = [];
  constructor(private _NewsService:NewsService) {
    _NewsService.getNews('business').subscribe((data:any)=>{

      this.businessNews=data.articles;
    })
   }
   openLink(link:"string"){
    window.open(link)
  }
  ngOnInit(): void {
  }

}
