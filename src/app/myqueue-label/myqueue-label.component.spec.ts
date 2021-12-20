import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyqueueLabelComponent } from './myqueue-label.component';

describe('MyqueueLabelComponent', () => {
  let component: MyqueueLabelComponent;
  let fixture: ComponentFixture<MyqueueLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyqueueLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyqueueLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
