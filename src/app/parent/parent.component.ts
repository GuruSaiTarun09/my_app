import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
  //encapsulation: viewEncapsulation.None //Emulated Shadown none
})
export class ParentComponent {

  count:number=0;
  updateCount(value:number){
    this.count =value;
  }
  catchMessage(value:string){
    console.log(value);
  }
}
