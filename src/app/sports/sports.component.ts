import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sportsNews:any[] = [];
  constructor(private _NewsService:NewsService) {
    _NewsService.getNews('sports').subscribe((data:any)=>{

      this.sportsNews=data.articles;
    })
   }
   openLink(link:"string"){
    window.open(link)
  }


  ngOnInit(): void {
  }

}
