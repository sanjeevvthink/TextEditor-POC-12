import {
  Component,
  ComponentFactoryResolver,
  Type,
  ViewChild,
  ViewContainerRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './app-modal-popup.component.html',
  styleUrls: ['./app-modal-popup.component.scss']
})
export class AppModalPopupComponent implements AfterViewInit {
  header: any;

  data: any;

  Component!: Type<any>;

  service : any;

  @ViewChild('template', { read: ViewContainerRef })
  componentHolder!: ViewContainerRef;

  /**
   *
   * @param cFResolver - ComponentFactoryResolver
   */
  constructor(private cFResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const componentFactory = this.cFResolver.resolveComponentFactory(this.Component);

    const componentRef = this.componentHolder.createComponent<Type<any>>(componentFactory);

    (<any>componentRef.instance).data = this.data;

    componentRef.changeDetectorRef.detectChanges();
  }

  closePopup() {
    this.service?.closePopup();
  }
}
