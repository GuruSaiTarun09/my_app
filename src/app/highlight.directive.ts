import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef:ElementRef) { }
  @HostListener('click')
  apply(){
    this.elementRef.nativeElement.style.backgroundColor='yellow';
  }
}
