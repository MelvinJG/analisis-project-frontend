import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string = '';
  public pass: string = '';

  constructor(private router: Router, private userService: UsersService) { }

  

  ngOnInit(): void {
    
  }

  public onClickMe(){
    if(this.user == '' || this.pass == ''){
      alert('INGRESE USUARIO Y CONTRASEÑA INCORRECTA');
    }
    else{
      this.userService.getUserLogin(this.user, this.pass).subscribe(
        res => {
          console.log(res)
          if(res == true){ 
            alert(`BIENVENIDO ${this.user}`);
            this.router.navigate(['/Home']);
          }
          else{
            alert('USUARIO O CONTRASEÑA INCORRECTA');
          }
        }
      );
    }    
  }

}
