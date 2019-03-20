import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MovieProvider {
  public BASEURL:string = "https://api.themoviedb.org/3/";
  public apiKey = "76783b6dbc60f58297b302f9bef9eb6d";
  constructor(public http: HttpClient) {

  }       

  getMovie(param = "popular"){
   return this.http.get(`https://api.themoviedb.org/3/movie/${param}?api_key=${this.apiKey}`);
  }
}
