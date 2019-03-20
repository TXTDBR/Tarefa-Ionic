import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MovieProvider
  ]
})
export class HomePage {
 public filmes:any = [];

  constructor(public navCtrl: NavController,
    private pMovie: MovieProvider) {
  }
  
  ionViewDidLoad() {
    this.pMovie.getMovie().subscribe(
      data=>{
        const rs = (data as any);
        this.filmes = rs.results;
      }, error => {
        console.log(error);
      }
    );
  }

}
