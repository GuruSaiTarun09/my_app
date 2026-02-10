import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private commonService:CommonService){
    commonService.getcount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
    }

  cartCount: number=0;
}
