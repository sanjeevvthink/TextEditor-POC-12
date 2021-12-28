import { Component, Input, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { ModalService } from '../modal.service';
import { model } from '../models/model';

@Component({
  selector: 'app-app-common-modal',
  templateUrl: './app-common-modal.component.html',
  styleUrls: ['./app-common-modal.component.scss']
})
export class AppCommonModalComponent implements OnInit {

  @Input()
  data!: model[];
  limitNumber = 4
  checkedNumber: any = 0
  checkboxList: any = [];
  inputValue: any = []

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.initializeScreen();
  }

  initializeScreen() {
    this.inputValue = JSON.parse(JSON.stringify(this.data));
    if (this.inputValue.length > 0) {
      this.checkedNumber = this.inputValue.filter((x: any) => x.value === true)?.length;
    }
  }

  onChange(event: any) {
    if (!event.target.checked) {
      this.checkedNumber++;
    } else {
      this.checkedNumber--;
    }
  }

  cancelFunc() {
    this.modalService.closePopup();
  }

  saveFunc() {
    this.modalService.closePopup(this.inputValue);
  }

}
