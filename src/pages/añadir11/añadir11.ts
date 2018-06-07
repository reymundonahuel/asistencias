import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { NoteService } from "../../service/notes.service";

@Component({
  selector: 'page-añadir11',
  templateUrl: 'añadir11.html',
})
export class Añadir11Page {
  constructor(public navCtrl: NavController, public navParams: NavParams, public NoteService: NoteService) {
    let id = navParams.get('id');
      let nombre= navParams.get('nombre');

}

}
