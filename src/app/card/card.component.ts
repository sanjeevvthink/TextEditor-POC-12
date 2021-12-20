import { Component, EventEmitter, Input, OnInit, Output, Attribute } from '@angular/core';
import { course } from './models/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() courseModel : any
  @Output() isExpand = new EventEmitter<boolean>();
  @Output() isCollapse = new EventEmitter<boolean>();
  
  
  myQueue: boolean = true
  expand: boolean = false
  
  images = [
   'https://source.unsplash.com/800x600/?nature',
  ]
  constructor() { 
  //   @Attribute('is-primary') public isPrimary,
  // @Attribute('is-secondary') public isSecondary,
  }

  ngOnInit(): void {
  }

  expandFunc(key: any){
    this.isExpand.emit(key);
    this.courseModel.expand = false
    this.courseModel.collapse = true
  }

  collapseFunc(key: any){
    this.isCollapse.emit(key);
    this.courseModel.expand = true
    this.courseModel.collapse = false
  }

}
