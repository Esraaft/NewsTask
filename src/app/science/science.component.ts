import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  scienceNews:any[] = [];
  constructor(private _NewsService:NewsService) {
    _NewsService.getNews('science').subscribe((data:any)=>{

      this.scienceNews=data.articles;
    })
   }
   openLink(link:"string"){
    window.open(link)
  }


  ngOnInit(): void {
  }

}
