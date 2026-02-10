import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
      accounts:any = [];

      constructor(private accountService:AccountService){
        accountService.getAccounts().subscribe(
          (data:any)=>{
            this.accounts=data;
          },
          (err:any)=>{
            alert("internal sever error")
          }
        )
      }
}
