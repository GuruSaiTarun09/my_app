import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
  @Input() max:number =0;
  message:string ="";

  @Output() valueChange:EventEmitter<string>=new EventEmitter();

  send(){
    this.valueChange.emit(this.message);
  }
}
