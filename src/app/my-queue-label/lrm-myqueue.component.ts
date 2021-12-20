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
      value: ""
    },
    {
      id:2,
      name:"Not Started",
      key:"Not Started",
      isChecked: false,
      value: ""
    },
    {
      id:3,
      name:"In Progress",
      key:"In Progress",
      isChecked: false,
      value: ""
    },
    {
      id:4,
      name:"Completed",
      key:"Completed",
      isChecked: false,
      value: ""
    },
    {
      id:5,
      name:"Total Mandatory",
      key:"Total Mandatory",
      isChecked: false,
      value: ""
    },
    {
      id:6,
      name:"Not Completed",
      key:"Not Completed",
      isChecked: false,
      value: ""
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
      componentProps:{
        header:"Disclosures summary point data",
        data:this.list,
        Component:AppCommonModalComponent
      }
    })
  }
}
