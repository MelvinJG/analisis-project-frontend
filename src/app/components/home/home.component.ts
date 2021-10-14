import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/comunication/info.service'
import { PostsService } from '../../services/posts/posts.service'
import { post } from '../../models/posts'
import { AvatarsService } from '../../services/photo/avatars.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista:string[]=["Público","Privado"];
  seleccionado:string= "";

  UserName: string = this.info.getName();

  newPost: post = {
    userName: '',
    post: '',
    estado: ''
  }

  thePosts: any = {
    username: '',
    img: '',
    post: '',
    estado: '',
    fecha: Date
  };

  constructor(private info: InfoService, private publicarPost: PostsService, private avatars: AvatarsService) { }

  ngOnInit(): void {
    this.obtenerPosts();
    this.getAvatar();
  }

  avatar: any = [];
  sources: any;

  getAvatar(){
    this.avatars.getAvatarsByUserName(this.UserName).subscribe(
      res => {        
        this.avatar = res;
        this.sources = this.avatar[0].img;
      },
      err => console.error(err)
    );
  }

  obtenerPosts(){
    this.publicarPost.getAllPostsPublic().subscribe(
      res => {
        
        this.thePosts = res;
        console.log(this.thePosts);
      },
      err => console.log(err)
    );
  }

  publicar(){
    this.newPost.userName = this.UserName;
    this.newPost.estado = this.seleccionado;
    if(this.newPost.post == ""){
      alert("Escriba Algo Para Publicar");      
    }
    else{
      if(this.newPost.estado == ""){
        alert("Seleccione el estado de la publicación");
      }
      else{
        this.publicarPost.newPost(this.newPost).subscribe(
          res => {
            console.log(res);
            this.newPost.post = "";
            this.ngOnInit();
          },
          err => console.log(err)
        );
      }
    }    
  }
}
