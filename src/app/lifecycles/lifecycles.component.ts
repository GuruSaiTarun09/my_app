import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-lifecycles',
  templateUrl: './lifecycles.component.html',
  styleUrls: ['./lifecycles.component.css']
})
export class LifecyclesComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
@Input()count:number=10;
age:number=22;
  constructor() {
    console.log("constructor called");
    console.log("construtor",this.count ,this.age )    //not  a part of life cycle hooks
    //depency initilizations
    //varaible initializations
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchange called");
    console.log("changes",changes);
    this.count=this.count+2; //this line only works here
    //parent to child value change/@input varible value chage
    //chages arugement contains 3 values :1)current value , previous value , firstchange
  }
    ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("chages",this.count,this.age);
    //initilizations which are dependent on parent to child values
  }
    ngDoCheck(): void {
    console.log("ngDoCheck called");
    ///every changes detection
    //if user is idle do logout; settimeout 5 mins
  }
    ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }
    ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
    ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log(document.getElementById('display')?.innerText);
  }
    ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
    ngOnDestroy(): void {
    console.log("ngOnDestroy called");
    ///before destorying comonet
    //clean 
  }

  //-----------
  pin:number=0;
  submit(){

  }
}
