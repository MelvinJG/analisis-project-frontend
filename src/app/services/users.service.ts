import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { userInterface } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API = "http://localhost:3000/Users";

  constructor(private http: HttpClient) { }

  getUserLogin (user: string, pass: string){
    return this.http.get(`${this.API}/Login/${user}/${pass}`);
  }

  registerUser (userNew: userInterface){
    return this.http.post(`${this.API}/Register`,userNew);
  }

  deleteUser (user: string){
    return this.http.delete(`${this.API}/Login/${user}`);
  }

  updateUser (user: string, userUp: userInterface){
    return this.http.put(`${this.API}/Update/${user}`,userUp);
  }
}
