import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommonModalComponent } from './app-common-modal.component';

describe('AppCommonModalComponent', () => {
  let component: AppCommonModalComponent;
  let fixture: ComponentFixture<AppCommonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCommonModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCommonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
