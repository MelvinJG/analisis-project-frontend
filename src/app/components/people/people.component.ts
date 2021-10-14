import { Component, OnInit } from '@angular/core';
import { AvatarsService } from '../../services/photo/avatars.service'
import { InfoService } from '../../services/comunication/info.service'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  Personas: any = [];

  getUsers(){
    //
    this.usersService.getAllUsers(this.info.getName()).subscribe(
      res => {
        console.log(res)
        this.Personas = res;
      },
      err => console.error(err)
    );
  }

  constructor(private avatars: AvatarsService, private usersService: UsersService, private info: InfoService) { }

  ngOnInit(): void {
    this.getUsers();
  }
}
