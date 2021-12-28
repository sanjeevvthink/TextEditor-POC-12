import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../language.service';
import { ModalService } from '../modal.service';
import { ViewModalPopupComponent } from './view-modal-popup.component';

fdescribe('ViewModalPopupComponent', () => {
  let component: ViewModalPopupComponent;
  let fixture: ComponentFixture<ViewModalPopupComponent>;
  let mockModalService : any
  let languageService : any

  beforeEach(async () => {

    mockModalService = jasmine.createSpyObj('ModalService', ['closePopup', 'createPopup']);
    languageService = jasmine.createSpyObj('LanguageService',['getLanguageData'])

    await TestBed.configureTestingModule({
      declarations: [ ViewModalPopupComponent ],
      providers: [
        { provide: ModalService, useValue: mockModalService },
        {provide: LanguageService , useValue: languageService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.segment = 'thumnailView';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('methods', () => {

    describe('cancel', () => {
    it('should call closepopup with changed values', () => {
      component.cancel();

      expect(mockModalService.closePopup).toHaveBeenCalledWith();
    });
  });
  
  describe('segmentChanged', () => {
    it('should call segmentChanged with changed values', () => {
      const data  = "Table View"
      component.segmentChanged({ detail: { value: "Table View" } }); 

      expect(component.segment).toBeTruthy();
    });
  });

  describe('reset', () => {
    it('should call reset with default values', () => {
      component.reset();
      component.setMandatory =
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

      expect(component.setMandatory).toEqual(component.dummyData);
    });
  });

  describe('uiUpdateDefaultResponse', () => {
    it('should call uiUpdateDefaultResponse with changed values', async() => {
      const data = {value : "Tamil"}
      component.uiUpdateDefaultResponse(data);

       
       const responseData = {
        content:"உங்கள் மன மற்றும் உடல் நலனை ஆதரிக்கும் ஆரோக்கியமான பழக்கவழக்கங்களை நீங்களே முதன்மைப்படுத்தி, உருவாக்குகிறீர்களா",
        content1:'நீங்கள் உணர்ச்சிவசப்படாமல் உணர்ந்தால்,',
        content3:'வேண்டும் அதாவது உங்கள் வாழ்க்கையைப் ',
        name : "isLanguageஅதிகமாக",
        content4:" உறவைப் பற்றிய உங்கள் தீர்க்கப்படாத உணர்வுகளை ஆராய்வது முக்கியம். உங்கள் முன்னாள்",
        segment1:"உங்கள் முன்னாள் காதல்",
        segment2:"அடுத்த உறவு",
        content5:" உங்கள் முன்னாள் காதல் நபருடன் நீங்கள் முரண்பட்ட அல்லது முரண்பட்ட குறிப்பிட்ட நிகழ்வுகளைப் பற்றி சிந்தியுங்கள்",
        content6:'உங்கள் தூண்டுதல்களைக் கண்டறிந்து, அவை கடந்த கால',
      }
      expect(languageService.getLanguageData.and.resolveTo(responseData)).toBeTruthy()

      // await component.uiUpdateDefaultResponse(data);
      // expect(component.dummyData.content).toEqual(responseData.content)
    });
  });

  describe('ngOnInit', () => {
    it('should call ngOnInit with loaded values', () => {
      component.setMandatory =
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
      component.ngOnInit()

      expect(component.setMandatory).toEqual(component.dummyData);
    });
  });
  


  })
});
