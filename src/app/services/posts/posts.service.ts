import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from '../../models/posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  API = "http://localhost:3000/Posts";

  constructor(private http: HttpClient) { }

  getAllPostsPublic(){
    return this.http.get(`${this.API}/Public`);
  }

  getAllPostsPrivate(userName: string){
    return this.http.get(`${this.API}/Private/${userName}`);
  }

  newPost(newPost: post): Observable<post>{    
    return this.http.post<post>(`${this.API}`,newPost);
  }
}
