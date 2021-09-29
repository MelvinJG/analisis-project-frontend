import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  Name: string = "";

  @Output() UserName: EventEmitter<any> = new EventEmitter();
  constructor() { }

  setName(name: string){
    this.Name = name;
  }

  getName(){
    return this.Name;
  }
}
