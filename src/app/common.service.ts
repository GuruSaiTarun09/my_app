import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  count:number=0;
  countSub:BehaviorSubject<number>=new BehaviorSubject(0);
  constructor() { }

  setCount(){
    this.count++;
    this.countSub.next(this.count);
  }
  getcount(){
    return this.countSub.asObservable();
  }
}
