import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from '../language.service';
// import { TranslateService } from '@ngx-translate/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-view-modal-popup',
  templateUrl: './view-modal-popup.component.html',
  styleUrls: ['./view-modal-popup.component.scss']
})
export class ViewModalPopupComponent implements OnInit {

  // @Input()shared:any;

  // @Output() emitChanges:EventEmitter<any> = new EventEmitter();


  changesValue: any;

  public segment: string = 'thumnailView';

  default: any;

  isEdited: any = false;

  setMandatory: any =
    {
      content: "We recommend use of default labels to support translation.when you change a label, make sure you do not change the meaning of it.",
      content1: 'Label of Mandatory Trainings',
      content3: 'Mandatory Training',
      name: "Language",
      mandatoryTrain: '',
      thumnailView: false,
      checkBox: false,
      content4: "Set thumbnail view as the default view",
      segment1: "Thumbnail View",
      segment2: "Table View",
      content5: "All fields that will appear on training content are listed. You can also select from the optional fields listed.",
      content6: 'Would you like to show all completed trainings in this view?',
      lastToggle: false,
      hideCheck: false,
      selectLanguages: {
        id: null,
        language: "",
        value: true,
        name: "",
        isSelected: false
      },
      segmentData: [
        {
          id: 1,
          name: "Status",
          isChecked: true,
          default: true
        },
        {
          id: 2,
          name: "Image Title",
          isChecked: true,
          default: true
        },
        {
          id: 3,
          name: "Title",
          isChecked: true,
          default: true
        },
        {
          id: 4,
          name: "Due Date",
          isChecked: true,
          default: true
        },
        {
          id: 5,
          name: "Duration",
          isChecked: true,
          default: true

        },
        {
          id: 5,
          name: "Description",
          isChecked: false,
          default: false
        },
        {
          id: 5,
          name: "Content ID",
          isChecked: false,
          default: false
        },
      ],
      segmentDataTable: [
        {
          id: 1,
          name: "Status",
          isChecked: true,
          default: true,
        },
        {
          id: 2,
          name: "Title",
          isChecked: true,
          default: true
        },
        {
          id: 3,
          name: "Due Date",
          isChecked: true,
          default: true
        },
        {
          id: 4,
          name: "Duration",
          isChecked: true,
          default: true
        },
        {
          id: 5,
          name: "Content ID",
          isChecked: false,
          default: false
        },
        {
          id: 6,
          name: "Available Language List",
          isChecked: false,
          default: false
        }
      ]
    }

  supportLanguages = [
    {
      id: 1,
      language: "English",
      value: true,
      name: "english",
      isSelected: false
    },
    {
      id: 2,
      language: "Spanish",
      value: true,
      name: "spanish",
      isSelected: false
    },
    {
      id: 3,
      language: "Tamil",
      value: true,
      name: "tamil",
      isSelected: false
    },
    {
      id: 4,
      language: "French",
      value: true,
      name: "french",
      isSelected: false
    }
  ]

  dummyData: any;

  selectLanguages: any = "";

  defaultLanguage = "Language";

  constructor(
    private modalService: ModalService,
    private languageService: LanguageService
    // public translateService:TranslateService
  ) { }

  ngOnInit(): void {
    this.dummyData = JSON.parse(JSON.stringify(this.setMandatory));
    console.log(this.dummyData);
  }

  segmentChanged(eve: any) {
    this.segment = eve.detail.value;
    console.log(this.segment)
  }

  cancel() {
    this.modalService.closePopup();
  }
  reset() {
    this.dummyData = this.setMandatory;
    console.log(this.dummyData);
    this.dummyData = JSON.parse(JSON.stringify(this.setMandatory));
    console.log(this.dummyData);
  }

  async uiUpdateDefaultResponse(data: any) {
    if (data.language == "Tamil") {
      const responseData = await this.languageService.getLanguageData("data")
      this.dummyData.content = responseData.content
      this.dummyData.content1 = responseData.content1
      this.dummyData.content3 = responseData.content3
      this.dummyData.content4 = responseData.content4
      console.log(responseData)
    }

    this.selectLanguages = data;
    console.log(this.selectLanguages);

    // this.translateService.use(this.selectLanguages);
    // this.emitChanges.emit(data);
  }

  saveData() {
    // this.emitChanges.emit(this.dummyData);
    // console.log(this.emitChanges.emit(this.dummyData));
  }
}
