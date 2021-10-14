import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/comunication/info.service'
import { PostsService } from '../../../services/posts/posts.service'
import { post } from '../../../models/posts'
import { AvatarsService } from '../../../services/photo/avatars.service'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  UserName: string = this.info.getName();

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
  }

  obtenerPosts(){
    this.publicarPost.getAllPostsPrivate(this.UserName).subscribe(
      res => {        
        this.thePosts = res;
        console.log(this.thePosts);
      },
      err => console.log(err)
    );
  }
}
