import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRede1]'
})
export class Rede1Directive {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color =  "green"
  }
  
}
