import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { MovieDetalhesProvider } from '../providers/config/movie-detalhes';

@Component({
  templateUrl: 'app.html',
  providers: [
    MovieDetalhesProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
     private configProvider: MovieDetalhesProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

     let config = this.configProvider.getPerfil;
     if( config == null){
      this.rootPage = IntroPage;
      this.configProvider.setConfig(false);
    }else{
      this.rootPage = TabsPage;
    } 
    });
  }
}
