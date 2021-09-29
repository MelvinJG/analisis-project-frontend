import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/comunication/info.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private info: InfoService) { }

  ngOnInit(): void {
    console.log("HOME",this.info.getName());
    /*this.info.UserName.subscribe(data => {
      console.log("PROFILE",data);
    });*/
  }

}
