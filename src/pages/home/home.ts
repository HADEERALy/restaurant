import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data';
import { ListingPage} from '../../pages/listing/listing';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slideData =[{image:"../../assets/imgs/coffee.jpeg"},{image:"../../assets/imgs/photo.jpg"},
  {image:"../../assets/imgs/photo1.jpg"},
{image:"../../assets/imgs/restaurant.jpg"},{image:"../../assets/imgs/breakfast.jpg"}]


   categories ;
  constructor(public navCtrl: NavController ,public dataProvider : DataProvider) {
   
    console.log("hadeer")
    this.dataProvider.getdata().subscribe(res=>{
      this.categories = res
      console.log(res)
      })
  }
  goListing(products){
    this.navCtrl.push(ListingPage,{"products":products})
    }
  

}
