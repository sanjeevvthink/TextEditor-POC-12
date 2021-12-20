import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModalPopupComponent } from './view-modal-popup.component';

describe('ViewModalPopupComponent', () => {
  let component: ViewModalPopupComponent;
  let fixture: ComponentFixture<ViewModalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModalPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
