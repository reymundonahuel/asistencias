import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Manana11Page } from "../manana11/manana11";

/**
 * Generated class for the Division1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-division1',
  templateUrl: 'division1.html',
})
export class Division1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Division1Page');
  }

primeroPrimera(){
  this.navCtrl.push( Manana11Page );


}



}
