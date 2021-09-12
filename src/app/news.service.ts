import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }

  getTopNews()
  {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country='+localStorage.getItem('Country')+'&apiKey=985c0ba30ab145ce83d7e0c0f87cdf85');
  }

  getNews(type:string)
  {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country='+localStorage.getItem('Country')+'&category='+type+'&apiKey=985c0ba30ab145ce83d7e0c0f87cdf85');
  }

  setcountry(newcountry:string)
  {
    localStorage.setItem('Country',newcountry);
    location.reload();
  }
}
