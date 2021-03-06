import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BoardingComponent } from '../boarding/boarding';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //setTimeout(this.navCtrl.push(HomePage));
    setTimeout(() => {
      this.navCtrl.push(HomePage) }, 3000);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
