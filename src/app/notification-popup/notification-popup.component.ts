import { ConditionalExpr } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {

  @Output() adminData: EventEmitter<any> = new EventEmitter();

  defaultPlaceHolder = "select"
  label = "Language Name"
  placeLabel = "Places"
  selectLanguage = ""
  changedData: any
  changedValue: any
  courseValue: any = []
  moduleValue: any = []
  storageContainer: any = []
  // placeLabel
  datas: any = [
    {
      id: 1,
      name: "Module",
    },
    {
      id: 2,
      name: "Course",
    }
  ]
  language: any = [
    {
      id: 1,
      key: "mod",
      name: "Module1"
    },
    {
      id: 2,
      key: "mod",
      name: "Module2"
    },
    {
      id: 3,
      key: "mod",
      name: "Module3"
    },
    {
      id: 4,
      key: "mod",
      name: "Module4"
    }
  ]
  places: any = [
    {
      id: 1,
      name: "Course1",
      key: "cor"
    },
    {
      id: 2,
      name: "Course2",
      key: "cor"
    },
    {
      id: 3,
      name: "Course3",
      key: "cor"
    },
    {
      id: 4,
      name: "Course4",
      key: "cor"
    }
  ]
  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.getAllValues();
  }

  async getAllValues() {
    // this.courseValue.push(...this.language, ...this.places)
    if (this.moduleValue.length === 0) {
      this.moduleValue.push(...this.datas)
    }

    this.changedData = this.moduleValue[1]
    this.changedValue = this.places[1]

    if (this.courseValue.length > 0) {
      if (this.changedValue != "") {
        if (this.changedValue.key == "mod") {
          this.courseValue.push(...this.language)
        } else {
          this.courseValue.push(...this.places)
        }
      }
    }
    console.log(this.courseValue)
  }

  uiGetFieldValues(data: any) {
    if (data.id == 1) {
      this.courseValue = this.language;
      this.changedValue = ""
    } else if (data.id == 2) {
      this.courseValue = this.places;
      this.changedValue = ""
    }
    this.storageContainer.push(data)
  }

  uiGetPlaceValues(data: any) {
    this.storageContainer.push(data)
  }

  resetFunc() {
    this.courseValue = []
    this.getAllValues()
  }

  cancelFunc() {
    this.modalService.closePopup();
  }
  
  saveFunc() {
    this.modalService.closePopup();
  }

}
