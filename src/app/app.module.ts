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
    CarosaldirDirective
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
