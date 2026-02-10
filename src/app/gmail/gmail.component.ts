import { Component } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent {
    gmails:any =[];

    constructor(private gmailservice:GmailService){
            gmailservice.getgmail().subscribe(
              (data:any)=>{
                this.gmails=data;
              },
              (err:any)=>{
                alert("interval sever error")
              }
            )
      
    }
}
