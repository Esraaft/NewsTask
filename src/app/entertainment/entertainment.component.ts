import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews:any[] = [];
  constructor(private _NewsService:NewsService) {
    _NewsService.getNews('entertainment').subscribe((data:any)=>{

      this.entertainmentNews=data.articles;
    })
   }

   openLink(link:"string"){
    window.open(link)
  }


  ngOnInit(): void {
  }

}
