import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  Name: string = "";
  chatName: string= '';
  IdChatName: any;

  @Output() UserName: EventEmitter<any> = new EventEmitter();
  constructor() { }

  setName(name: string){
    this.Name = name;
  }

  getName(){
    return this.Name;
  }

  setChatName(namechat: string){
    this.chatName = namechat;
  }

  getChatName(){
    return this.chatName;
  }

  setIdChatName(Idnamechat: string){
    this.IdChatName = Idnamechat;
  }

  getIdChatName(){
    return this.IdChatName;
  }
}
