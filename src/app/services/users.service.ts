import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { userInterface } from '../models/users'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API = "http://localhost:3000/Users";

  constructor(private http: HttpClient) { }

  getMyId(userName: string){
    return this.http.get(`${this.API}/MyId/${userName}`);
  }

  getAllUsers(user: string){
    return this.http.get(`${this.API}/People/${user}`);
  }

  getUserLogin (user: string, pass: string){
    return this.http.get(`${this.API}/Login/${user}/${pass}`);
  }

  getUserByUser (user: string){
    return this.http.get(`${this.API}/${user}`);
  }

  registerUser (userNew: userInterface): Observable<userInterface> {    
    const res = this.http.post<userInterface>(`${this.API}/Register`,userNew);    
    return res;
  }

  deleteUser (user: string){
    return this.http.delete(`${this.API}/Login/${user}`);
  }

  updateUser (user: any, userUp: userInterface){
    return this.http.put(`${this.API}/Update/${user}`,userUp);
  }
}
