import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '../modal.service';

import { NotificationPopupComponent } from './notification-popup.component';

fdescribe('NotificationPopupComponent', () => {
  let mockModalService: any
  let component: NotificationPopupComponent;
  let fixture: ComponentFixture<NotificationPopupComponent>;

  beforeEach(async () => {
    mockModalService = jasmine.createSpyObj('ModalService', ['closePopup', 'createPopup']);

    await TestBed.configureTestingModule({
      declarations: [NotificationPopupComponent],
      providers: [
        { provide: ModalService, useValue: mockModalService }]
    })
      .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(NotificationPopupComponent);
    component = fixture.componentInstance;
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

    describe('getAllValues', () => {
      beforeEach(() => {
        component.language = [
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
      })
      it('should call getAllValues', () => {
        const datas: any = [
          {
            id: 1,
            name: "Module",
          },
          {
            id: 2,
            name: "Course",
          }
        ]
        component.getAllValues();
        component.moduleValue == ""

        expect(component.moduleValue).toBeTruthy();
      });

      // it('load courseValues if course available', () => {

      //   component.getAllValues();
      //   const data = "mod"

      //   expect(component.courseValue).toEqual(component.language);
      // });

    });

    describe('saveFunc', () => {
      it('should call saveFunc', () => {
        component.saveFunc();

        expect(mockModalService.closePopup).toHaveBeenCalledWith();
      });
    });

    describe('resetFunc', () => {
      it('should call resetFunc', () => {
        component.resetFunc();
        component.courseValue = []
        component.getAllValues()

        expect(component.courseValue).toBeTruthy();
      });
    });

    describe('uiGetFieldValues', () => {
      it('should call resetFunc', () => {
        const language: any = [
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
        const data = { id: 1 }
        component.uiGetFieldValues(data);


        component.courseValue = language
        expect(component.courseValue).toBeTruthy()
      })

      it('should call resetFunc', () => {
        const places: any = [
          {
            id: 1,
            name: "Course1",
            key: "cor"
          }
        ]
        const data = { id: 2 }
        component.uiGetFieldValues(data);

        component.courseValue = places
        expect(component.courseValue).toBeTruthy()
      })

    })




  })
})
