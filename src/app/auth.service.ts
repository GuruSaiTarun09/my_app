import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  login(user:any){
    return this.httpclient.post("https://dummyjson.com/auth/login",user);
  }
}
