import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '../modal.service';
import { AppCommonModalComponent } from './app-common-modal.component';

fdescribe('AppCommonModalComponent', () => {
  let component: AppCommonModalComponent;
  let fixture: ComponentFixture<AppCommonModalComponent>;
  let mockModalService: any;

  beforeEach(async () => {

    mockModalService = jasmine.createSpyObj('ModalService', ['closePopup', 'createPopup']);

    await TestBed.configureTestingModule({
      declarations: [AppCommonModalComponent],
      providers: [
        { provide: ModalService, useValue: mockModalService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCommonModalComponent);
    component = fixture.componentInstance;
    component.data = [
      {
        id: 1,
        name: "Past Due",
        key: "Past Due",
        isChecked: false,
        value: false
      },
      {
        id: 2,
        name: "Not Started",
        key: "Not Started",
        isChecked: false,
        value: false
      }
    ]
    component.inputValue = [
      {
        id: 1,
        name: "Past Due",
        key: "Past Due",
        isChecked: false,
        value: false
      },
      {
        id: 2,
        name: "Not Started",
        key: "Not Started",
        isChecked: false,
        value: false
      }

    ]
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  describe('methods', () => {
    describe('cancelFunc', () => {
      it('should call closepopup', () => {
        component.cancelFunc();

        expect(mockModalService.closePopup).toHaveBeenCalledWith();
      });
    });

  describe('saveFunc', () => {
    const data = [
      {
        id: 1,
        name: "Past Due",
        key: "Past Due",
        isChecked: false,
        value: false
      },
      {
        id: 2,
        name: "Not Started",
        key: "Not Started",
        isChecked: false,
        value: false
      }
    ]
    it('should call closepopup with changed values', () => {
      component.saveFunc();

      expect(mockModalService.closePopup).toHaveBeenCalledWith(data);
    });
  });

  describe('ngOnInit', () => {
    it('should call ngOninit', () => {
      component.data = [
        {
          id: 1,
          name: "Past Due",
          key: "Past Due",
          isChecked: false,
          value: false
        },
        {
          id: 2,
          name: "Not Started",
          key: "Not Started",
          isChecked: false,
          value: true
        }
      ]

      component.checkedNumber = 1
      component.ngOnInit();
      expect(component.checkedValue.length).toEqual(component.checkedNumber);
    });
  });

  describe('onChange', () => {
    it('should call onChange when check box is clicked', () => {
      component.onChange({ target: { checked: true } });

      expect(component.onChange).toBeTruthy()
    });
    it('should call onChange when check box is clicked', () => {
      component.onChange({ target: { checked: false } });

      expect(component.onChange).toBeTruthy()
    });
    
  });
})


});
