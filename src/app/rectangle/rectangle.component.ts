import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
      num1:number=0;
      num2:number=0;
      result:number=0;
      result1:number=0;
      area(){
        this.result=this.num1*this.num2;
      }
      perimeter(){
       this.result1= 2*(this.num1+this.num2)
      }
}
