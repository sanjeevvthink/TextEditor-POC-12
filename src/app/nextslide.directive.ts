import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextslide]'
})
export class NextslideDirective {

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement)
  }

  @HostListener('click')
  nextFunc() {

    var elm = this.el.nativeElement.parentElement
    var item = elm.getElementsByClassName('slider-main')
    console.log(elm)
    elm.append(item[0])

    // var elmf = this.el.nativeElement.parentElement.children
    // console.log(elmf)
    //  var elm = this.el.nativeElement.parentElement
    //  var item = elm.getElementsByClassName('appCardContainer')
    //  console.log(item)
    //  console.log(elm)
    //  elm.append(item[0])
  }
}
