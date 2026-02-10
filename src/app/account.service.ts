import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient){}
     
     getAccounts(){
       return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
     }

}
