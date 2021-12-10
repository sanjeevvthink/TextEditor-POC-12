import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
