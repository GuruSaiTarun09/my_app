import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(private httpClient:HttpClient) { }

  getgmail(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }
}
