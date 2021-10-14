import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/services/comunication/info.service';
import { FriendsService } from '../../services/Friends/friends.service'

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor(private friendsService: FriendsService, private info: InfoService, private router: Router) { }

  Friends: any = [];

  getSolicitudes(){
    this.friendsService.getMisSolicitudes(this.info.getMyIdUser()).subscribe(
      res => {
        console.log(res)
        this.Friends = res;
      },
      err => console.error(err)
    );
  }

  Personas: any = [];

  getSolicitudesEnvidas(){
    this.friendsService.getMisSolicitudesEnviadas(this.info.getName()).subscribe(
      res => {
        console.log(res)
        this.Personas = res;
      },
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    this.getSolicitudes();
    this.getSolicitudesEnvidas();
  }

}
