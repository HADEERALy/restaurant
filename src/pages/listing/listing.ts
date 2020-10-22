import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, AlertController, Nav} from 'ionic-angular';
/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})
export class ListingPage {
 /*data=[
   {
  name:'primary',
  selected:false
},
  {
    name:'secondary',
    selected:true
  },
    {
      name:'tertiary',
      selected:false
    },
      {
        name:'success',
        selected:false
      }
 ];*/

  products;
  constructor(public nav: Nav,public navCtrl: NavController, public navParams: NavParams) {
    this.products = this.navParams.data.products;
    JSON.stringify(this.products)
    console.log("my listing poroducts",this.products);  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingPage')
  }
  rollBack(){
    this.nav.pop();
  }
  }
