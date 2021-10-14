import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/comunication/info.service'
import { UsersService } from '../../services/users.service'
import { userInterface } from '../../models/users'
import { AvatarsService } from '../../services/photo/avatars.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  UserName: string = this.info.getName();

  User: userInterface = {
    id: 0,
    userName: '',
    fullName: '',    
    pass: '',    
    mail: '',    
    avatar: 0,
    birthday: new Date,
    relationShip: '',
    hobbies: '',
    music: '',
    father: '',
    mother: '',
    country: '',
    city: '',
  }

  constructor(private usersService: UsersService, private info: InfoService, private avatars: AvatarsService) { }

  ngOnInit(): void {    
    this.usersService.getUserByUser(this.UserName).subscribe(
      res => {
        this.User = res;
        let cosa = Object.values(this.User);
        this.User.userName = cosa[0].userName;          
        this.User.fullName = cosa[0].fullName;
        this.User.mail = cosa[0].mail;
        this.User.birthday = cosa[0].birthday;
        this.User.relationShip = cosa[0].relationShip;
        this.User.hobbies = cosa[0].hobbies;
        this.User.music = cosa[0].music;
        this.User.father = cosa[0].father;
        this.User.mother = cosa[0].mother;
        this.User.country = cosa[0].country;
        this.User.city = cosa[0].city;
        this.User.avatar = cosa[0].avatar;
        this.getAvatar();
      },
      err => console.error(err)
    );    
  }

  avatar: any = [];
  sources: any;

  getAvatar(){    
    const imgID: any = this.User.avatar;
    this.avatars.getAvatarsByID(imgID).subscribe(
      res => {        
        this.avatar = res;
        this.sources = this.avatar[0].img;
      },
      err => console.error(err)
    );
  }
}
