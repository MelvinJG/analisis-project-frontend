import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AvatarsService {

  constructor(private http: HttpClient) { }

  getAvatars (){
    return this.http.get(`http://localhost:3000/Avatars`);
  }

  getAvatarsByID (id: number){
    return this.http.get(`http://localhost:3000/Avatars/${id}`);
  }

  getAvatarsByUserName (UserName: string){
    return this.http.get(`http://localhost:3000/Avatars/Name/${UserName}`);
  }
}

