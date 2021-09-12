import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  topNews:any[] = [];
  constructor(private _NewsService:NewsService) {
    _NewsService.getTopNews().subscribe((data:any)=>{

      this.topNews=data.articles;
    })
   }

   openLink(link:"string"){
    window.open(link)
  }
  
  ngOnInit(): void {
  }

}
