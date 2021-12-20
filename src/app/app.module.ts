import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IvyCarouselModule } from "angular-responsive-carousel";
import { NextslideDirective } from './nextslide.directive';
import { CardComponent } from './card/card.component';
import { PrevSlideDirective } from './prev-slide.directive';
import { CarosaldirDirective } from './carosaldir.directive';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './carousel/carousel.component';
import { AppModalPopupComponent } from './app-modal-popup/app-modal-popup.component';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { AppDropdownComponent } from './app-dropdown/app-dropdown.component';
import { MyqueueLabelComponent } from './myqueue-label/myqueue-label.component';
import { AppCommonModalComponent } from './app-common-component/app-common-modal.component';
import { LrmMyqueueComponent } from './my-queue-label/lrm-myqueue.component';
import { ReviewPopupComponent } from './review-popup/review-popup.component';
import {ViewModalPopupComponent} from './mandatory-training/view-modal-popup.component'
// import { 
// 	IgxCarouselModule,
// 	IgxSliderModule
//  } from "igniteui-angular";



@NgModule({
  declarations: [
    AppComponent,
    NextslideDirective,
    CardComponent,
    PrevSlideDirective,
    CarosaldirDirective,
    CarouselComponent,
    AppModalPopupComponent,
    NotificationPopupComponent,
    AppDropdownComponent,
    MyqueueLabelComponent,
    AppCommonModalComponent,
    LrmMyqueueComponent,
    ReviewPopupComponent,
    ViewModalPopupComponent
  ],
  imports: [
    IvyCarouselModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
