import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarsService } from '../../services/photo/avatars.service'
import { userInterface } from '../../models/users'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public pass: string = '';
  public pass2: string = '';
  public idAvatar: number = 0;

  avatar: any = [];

  User: userInterface = {    
    userName: '',
    fullName: '',   
    pass: '',    
    mail: '',    
    avatar: 0
  }

  constructor(private router: Router, private avatars: AvatarsService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.avatars.getAvatars().subscribe(
      res => {
        this.avatar = res;
      },
      err => console.error(err)
    );
  }

  getAvatarID(id: string){
    this.idAvatar = parseInt(id,10);
    console.log(id);
  }

  public register(){
    if(this.User.fullName == '' || this.User.userName == ' ' || this.User.mail == ' ' || this.User.pass == ' '){
      alert('Ingrese Sus Datos');
    }
    else{
      if(this.pass == this.pass2){
        this.User.pass = this.pass;
        this.User.avatar = this.idAvatar;
        console.log(this.User);
        this.usersService.registerUser(this.User).subscribe(
          res => {
            console.log(res);
            alert(`Usuario ${this.User.userName} Registrado`);
            this.router.navigate(['/Login']);
          },
          err => {
            console.log(err);
            alert('No se puede Actulizar los datos')
          }
        );        
      }
      else{
        alert("Contraseñas inivalidas");
      }
    }        
  }
}
