import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
      age:number=20;
      name:string="guru"

      cricket:string="viratkaohli"
      inputType:string="radio"
      message:string="Hi"

      submit(){
        alert("success");
      }
}
