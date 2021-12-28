import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '../modal.service';

import { ReviewPopupComponent } from './review-popup.component';

fdescribe('ReviewPopupComponent', () => {
  let component: ReviewPopupComponent;
  let fixture: ComponentFixture<ReviewPopupComponent>;
  let mockModalService: any;

  beforeEach(async () => {
    mockModalService = jasmine.createSpyObj('ModalService', ['closePopup', 'createPopup']);


    await TestBed.configureTestingModule({
      declarations: [ReviewPopupComponent],
      providers: [
        { provide: ModalService, useValue: mockModalService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPopupComponent);
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

    describe('saveFunc', () => {
        const data = {
          emotion: "",
          description: ""
        }
      it('should call closepopup with changed values', () => {
        component.saveFunc();

        expect(mockModalService.closePopup).toHaveBeenCalledWith(data);
      });
    });

    describe('onClick', () => {
      it('should get data from onclicking emoj', () => {

        const mockData = "dissatisfied"
        const selectedData = "dissatisfied"

        component.onClick(mockData);
  
        expect(selectedData).toEqual(mockData);
      });
    });

  })
});
