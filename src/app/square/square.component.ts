import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
          num1:number=0;
          result:number=0;
          result1:number=0;

          area(){
            this.result=this.num1*this.num1;
          }
          perimeter(){
            this.result1=4*this.num1;
          }

}
