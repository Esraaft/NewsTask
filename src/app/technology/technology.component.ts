import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technologyNews:any[] = [];
  constructor(private _NewsService:NewsService) {
    _NewsService.getNews('technology').subscribe((data:any)=>{

      this.technologyNews=data.articles;
    })
   }

   openLink(link:"string"){
    window.open(link)
  }

  ngOnInit(): void {
  }

}
