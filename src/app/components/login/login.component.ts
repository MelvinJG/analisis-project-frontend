import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service'
import { InfoService } from '../../services/comunication/info.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string = '';
  public pass: string = '';

  constructor(private router: Router, private userService: UsersService, private info: InfoService) { }

  ngOnInit(): void {
    
  }
  Myid: any = [];

  MyId(){
    this.userService.getMyId(this.user).subscribe(
      res => {
        this.Myid = res;            
      }
    );
  }

  public onClickMe(){
    this.MyId();
    if(this.user == '' || this.pass == ''){
      alert('INGRESE USUARIO Y CONTRASEÑA INCORRECTA');
    }
    else{      
      this.userService.getUserLogin(this.user, this.pass).subscribe(        
        res => {
          if(res == true){ 
            alert(`BIENVENIDO ${this.user}`);            
            this.info.setName(this.user);
            this.info.setMyIdUser(this.Myid[0].id);
            this.router.navigate([`/Home`]);            
          }
          else{
            alert('USUARIO O CONTRASEÑA INCORRECTA');
          }
        }
      );
    }    
  }

}
