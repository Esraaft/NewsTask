import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  healthNews:any[] = [];
  constructor(private _NewsService:NewsService) {
    _NewsService.getNews('health').subscribe((data:any)=>{

      this.healthNews=data.articles;
    })
   }

   openLink(link:"string"){
    window.open(link)
  }


  ngOnInit(): void {
  }

}
