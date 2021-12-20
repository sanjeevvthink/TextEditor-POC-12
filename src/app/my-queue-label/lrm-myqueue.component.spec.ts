import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrmMyqueueComponent } from './lrm-myqueue.component';

describe('LrmMyqueueComponent', () => {
  let component: LrmMyqueueComponent;
  let fixture: ComponentFixture<LrmMyqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrmMyqueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrmMyqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
