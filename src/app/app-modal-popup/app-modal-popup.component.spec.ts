import { Component, ComponentFactoryResolver, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { IonicModule } from '@ionic/angular';
// import { SharedModule } from '../../shared.module';

import { AppModalPopupComponent } from './app-modal-popup.component';

// Mock

@Component({
  template: '<h1>Hello</h1>'
})
export class MockDynamicComponent {}

describe('AppModalPopupComponent', () => {
  let component: AppModalPopupComponent;
  let fixture: ComponentFixture<AppModalPopupComponent>;
  // let mockService;
  let componentFactoryResolver : ComponentFactoryResolver;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    // mockService = jasmine.createSpyObj('service', ['closePopup']);

    TestBed.configureTestingModule({
      declarations: [AppModalPopupComponent],
      // imports: [IonicModule.forRoot(), SharedModule]
    }).overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [MockDynamicComponent] } })
      .compileComponents();

    fixture = TestBed.createComponent(AppModalPopupComponent);
    component = fixture.componentInstance;

    // Component initialize
    // component.component = MockDynamicComponent;
    component.data = 'test';
    component.header = 'Popup';
    // component.service = mockService;

    fixture.detectChanges();
  }));

  afterEach(() => {
    // component = null;
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Give dynamic values to header', () => {
    component.header = 'Test Header';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.modal-popup-title'));

    expect(button.nativeElement.textContent.trim()).toBe('Test Header');
  });

  describe('method', () => {
    describe('closePopup()', () => {
      it('should trigger close popup service method', () => {
        component.closePopup();

        // expect(mockService.closePopup).toHaveBeenCalledWith();
      });

      it('should not trigger close popup service method if service is empty', () => {
        component.service = null;
        component.closePopup();

        // expect(mockService.closePopup).not.toHaveBeenCalledWith();
      });
    });
  });
});
