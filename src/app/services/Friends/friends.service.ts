import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mesage } from '../../models/mesage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  API = "http://localhost:3000/Friends";

  constructor(private http: HttpClient) { }

  getAllFriends(userName: string){
    return this.http.get(`${this.API}/${userName}`);
  }

  getChatFriends(userName: string){
    return this.http.get(`${this.API}/Chat/${userName}`);
  }

  SendMessage(sendmesage: mesage): Observable<mesage>{
    console.log('MENSAJE',sendmesage);
    return this.http.post<mesage>(`${this.API}/SendMesage`,sendmesage);
  }
}
