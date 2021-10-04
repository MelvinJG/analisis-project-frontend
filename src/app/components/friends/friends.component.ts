import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/services/comunication/info.service';
import { FriendsService } from '../../services/Friends/friends.service'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private friendsService: FriendsService, private info: InfoService, private router: Router) { }

  Friends: any = [];
  
  getFriends(){
    this.friendsService.getAllFriends(this.info.getName()).subscribe(
      res => {
        console.log(res)
        this.Friends = res;
      },
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    this.getFriends();
  }

  gotoChat(user: string, id: any){
    this.router.navigate([`/Chat`]);  
    this.info.setChatName(user);
    this.info.setIdChatName(id);
  }

}
