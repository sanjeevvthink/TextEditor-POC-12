import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrevSlide]'
})
export class PrevSlideDirective {

  constructor(private al: ElementRef) { }
@HostListener('click')
prevFunc(){
  var elm = this.al.nativeElement.parentElement
  var item = elm.getElementsByClassName('slider-main')
  console.log(elm)
  elm.prepend(item[item.length - 1])
  console.log()
}
}
