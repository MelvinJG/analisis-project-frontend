import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/comunication/info.service';
import { FriendsService } from '../../services/Friends/friends.service';
import { mesage } from '../../models/mesage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  Mensaje: mesage = {
    userName: '',
    idFriend: 0,
    mensage: ''
  }

  constructor(private friendsService: FriendsService, private info: InfoService) { }
  
  ChatUser: any;
  Friends: any = [];
  ChatMesage: any = [];

  getFriends(){
    this.friendsService.getAllFriends(this.info.getName()).subscribe(
      res => {
        console.log(res)
        this.Friends = res;
      },
      err => console.error(err)
    );
  }

  getChatMesage(){
    this.friendsService.getChatFriends(this.info.getChatName()).subscribe(
      res => {
        console.log(res)
        this.ChatMesage = res;
      },
      err => console.error(err)
    );
  }

  sendMessage(){
    this.Mensaje.userName = this.info.getName();
    this.Mensaje.idFriend = this.info.getIdChatName();
    console.log(this.Mensaje);   
    this.friendsService.SendMessage(this.Mensaje).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
        this.Mensaje.mensage = '';

      },
      err => {
        console.log(err);
        alert('No se puede enviar el Mensaje')
      }
    );   
  }

  ngOnInit(): void {
    this.getFriends();
    this.getChatMesage();
    this.ChatUser = `- ${this.info.getChatName()}`;
    
  }
  
  userChat(){
    this.ChatUser = `- MelvinJG`;
  }
}
