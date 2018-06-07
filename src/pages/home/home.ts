import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Division1Page }  from "../division1/division1";
import { Division2Page } from "../division2/division2";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
    manana(){

  this.navCtrl.push( Division1Page );
}

tarde(){

  this.navCtrl.push( Division2Page );
}



  }
