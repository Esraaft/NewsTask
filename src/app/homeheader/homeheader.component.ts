import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from '../news.service';
NewsService

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin:8,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
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
