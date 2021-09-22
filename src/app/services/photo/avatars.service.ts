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

}
