import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { userInterface } from '../../models/users'
import { AvatarsService } from '../../services/photo/avatars.service'
import { InfoService } from '../../services/comunication/info.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

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

  avatar: any = [];
  sources: any;
  constructor(private usersService: UsersService, private avatars: AvatarsService, private info: InfoService, private router: Router) { }

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

  GuardarInfo(){    
    let update = {
      fullName: this.User.fullName, 
      mail: this.User.mail,
      birthday: this.User.birthday,
      relationShip: this.User.relationShip,
      hobbies: this.User.hobbies,
      music: this.User.music,
      father: this.User.father,
      mother: this.User.mother,
      country: this.User.country,
      city: this.User.city,
    }
    this.usersService.updateUser(this.User.userName,update).subscribe(
      res => {
        console.log(res);
        alert("Datos Actualizados");
        this.router.navigate([`/Profile`]);
      },
      err => {
        console.log(err);
        alert('No se puede Actulizar los datos')
      }
    );
  }

}
