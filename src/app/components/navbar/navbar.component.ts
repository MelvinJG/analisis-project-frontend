import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/comunication/info.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  UserName: string = this.info.getName();

  constructor( private info: InfoService) { }

  ngOnInit(): void {
  }

}
