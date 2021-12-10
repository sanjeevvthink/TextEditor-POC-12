import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCarosaldir]'
})
export class CarosaldirDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  changeDom() {
    var elm = this.el.nativeElement.parentElement.parentElement
    console.log(elm)
    var item = elm.getElementsByClassName('slider-main')
    // elm.prepend(item[item.length - 1])
    // elm.append(item[2])
  }

}
