import { Injectable } from '@angular/core';

@Injectable()
export class NoteService{
  note = [
    {id:1, name: "Reymundo Nahuel"},
    {id:2, name: "Alumno2"},
    {id:3, name: "Alumno3"}
  ];
  public getNotes(){
    return this.note;
  }


}
