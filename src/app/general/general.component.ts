import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  generalNews:any[] = [];
  constructor(private _NewsService:NewsService) {
    _NewsService.getNews('general').subscribe((data:any)=>{

      this.generalNews=data.articles;
    })
   }

   openLink(link:"string"){
    window.open(link)
  }


  ngOnInit(): void {
  }

}
