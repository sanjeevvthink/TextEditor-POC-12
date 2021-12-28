import { Component, OnInit } from '@angular/core';
import { AppCommonModalComponent } from '../app-common-component/app-common-modal.component';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-lrm-myqueue',
  templateUrl: './lrm-myqueue.component.html',
  styleUrls: ['./lrm-myqueue.component.scss']
})
export class LrmMyqueueComponent implements OnInit {
  item:any;
  list = [
    {
      id:1,
      name:"Past Due",
      key:"Past Due",
      isChecked: false,
      value: false
    },
    {
      id:2,
      name:"Not Started",
      key:"Not Started",
      isChecked: false,
      value: true
    },
    {
      id:3,
      name:"In Progress",
      key:"In Progress",
      isChecked: false,
      value: true
    },
    {
      id:4,
      name:"Completed",
      key:"Completed",
      isChecked: false,
      value: false
    },
    {
      id:5,
      name:"Total Mandatory",
      key:"Total Mandatory",
      isChecked: false,
      value: false
    },
    {
      id:6,
      name:"Not Completed",
      key:"Not Completed",
      isChecked: false,
      value: false
    }
  ]


  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
    this.item = this.list.map((name) =>{
      let key = name.key
      return key
    })
  }

  openModalPopup(event:any){
    this.modalService.createPopup({
      backdropDismiss:true,
      cssClass: 'popup-modal-css-mandatory',
      componentProps:{
        header:"My queue summary and data points",
        data:this.list,
        Component:AppCommonModalComponent
      }
    })
  }
}
