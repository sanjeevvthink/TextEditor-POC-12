import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-app-common-modal',
  templateUrl: './app-common-modal.component.html',
  styleUrls: ['./app-common-modal.component.scss']
})
export class AppCommonModalComponent implements OnInit {

  @Input() data:any;
  limitNumber = 4
  checkedNumber: any = 0
  changedData: any;
  datas:any;

  maxNo = false;

  amt = 0;

  checked:any

  public maxElementCheckbox = 4;

  checkboxList:any = [];
  constructor(private modalService: ModalService) {
  }
  
  ngOnInit(): void {
    console.log(this.data)
    console.log(this.changedData)
    // this.checkedBox();
  }

  onChange(event:any, id:any){
    if(event.target.checked){
      this.checkboxList.push(id);
    } 
    if (event.target.checked) {
      this.checkedNumber++;
    } else {
      this.checkedNumber--;
    }
  }

  public disableCheckbox(){
    return this.checkboxList.length >= this.maxElementCheckbox;
    // return !this.dat.isChecked && (this.data.filter((x: any)=>(x.value == true)).length >= this.maxElementCheckbox)

  }

  resetFunc() {

  }
  cancelFunc() {
    this.modalService.closePopup();
  }
  saveFunc() {
    this.modalService.closePopup();
  }
}
