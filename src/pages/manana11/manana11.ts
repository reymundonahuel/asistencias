import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Añadir11Page } from "../añadir11/añadir11";
import { NoteService } from "../../service/notes.service";

@Component({
  selector: 'page-manana11',
  templateUrl: 'manana11.html',
})
export class Manana11Page {

notes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService : NoteService) {
    this.notes = noteService.getNotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Manana11Page');
  }

public subir(note){
  this.navCtrl.push( Añadir11Page, {"id": note.id, "Nombre": note.name})};
}
