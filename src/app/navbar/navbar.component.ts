import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _NewsService:NewsService,private _Router:Router) { }

  getcountry(country:string)
  {
    this._NewsService.setcountry(country);
  }

  ngOnInit(): void {
  }

}
