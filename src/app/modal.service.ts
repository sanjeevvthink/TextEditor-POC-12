import { Injectable, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';

import { AppModalPopupComponent } from '../app/app-modal-popup/app-modal-popup.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnDestroy {
  modalPopup : any;

  private modalClose = new Subject();

  constructor(private modalController: ModalController) {}

  ngOnDestroy() {
    this.modalClose.observers.length = 0;
  }

  closeModal() {
    return this.modalClose.asObservable();
  }

  setValues(obj: any, action : any) {
    const final = {
      ...obj,
      action
    };
    this.modalClose.next(final);
  }

  async createPopup(options: any) {
    options.componentProps.service = this;
    const ref = await this.modalController.create({
      component: AppModalPopupComponent,
      ...options
    });
    if (!this.modalPopup?.length) { this.modalPopup = []; }
    this.modalPopup.push(ref);
    ref.present();

    return ref;
  }

  closePopup(data? : any) {
    if (!this.modalPopup) { return; }
    const ref = this.modalPopup.pop();
    if (ref) { ref.dismiss(data); }
    if (!this.modalPopup.length) { this.modalPopup = null; }
  }
}
