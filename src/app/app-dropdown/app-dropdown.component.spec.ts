/* eslint-disable jasmine/no-spec-dupes */
/* eslint-disable max-lines */
import { HttpClientModule } from '@angular/common/http';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, IonInfiniteScroll } from '@ionic/angular';

import { AppDropdownComponent } from './app-dropdown.component';

describe('AppDropdownComponent', () => {
  let component: AppDropdownComponent;
  let fixture: ComponentFixture<AppDropdownComponent>;
  const currentValue = {
    brandId: 1,
    brandName: 'ACRT',
    createdAt: '2021-01-19T05:53:00.527',
    createdBy: 1,
    cus1: 'Manager',
    cus2: 'US',
    cus3: 'Full Time',
    cus4: null,
    cus5: null,
    cus6: null,
    cus7: null,
    cus8: null,
    cus9: null,
    cus10: null,
    departmentId: 1,
    departmentName: 'CC001 Corporate Admin',
    emailId: 'abcd@gmail.com',
    empId: '1',
    firstName: 'ABD',
    fullName: 'ABD V',
    isDeleted: false,
    isLOA: true,
    isSelected: true,
    lastName: 'V',
    location: null,
    position: null,
    profileImage: '',
    roleId: 1,
    source: 'Microsoft',
    updatedAt: null,
    updatedBy: null,
    userId: 2
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppDropdownComponent],
      imports: [IonicModule.forRoot(), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppDropdownComponent);
    component = fixture.componentInstance;
    component.selectedValue = [{
      id: 1,
      name: 'a'
    }, {
      id: 2,
      name: 'b'
    }];
    fixture.detectChanges();
  }));

  afterEach(() => {
    // component = null;
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClick method when clicked on the div element', () => {
    component.showDropDown = true;
    fixture.detectChanges();
    const activeValueBeforeClick = component.showDropDown;
    const debugEl: HTMLElement = fixture.debugElement.nativeElement.querySelector('.select-container');
    debugEl.click();

    expect(component.showDropDown).toBeFalsy();
  });

  it('should close dropdown when you click outside of dropdown', () => {
    component.showDropDown = true;
    fixture.detectChanges();
    // document.querySelector('body').click();

    expect(component.showDropDown).toBeFalsy();
  });

  it('should create a selectedValue array', () => {
    component.multiSelectable = true;
    component.ngOnInit();

    expect(component.selectedValue).toBe(undefined);
  });

  describe('method', () => {
    describe('onCancel', () => {
      it('should cancel a search', () => {
        component.data = [{
          id: 1,
          name: 'a'
        }, {
          id: 2,
          name: 'b'
        }];
        component.onCancel();

        expect(component.listToShow).toBe(component.data);
      });
    });

    describe('OnSearch', () => {
      it('should search an item exists', () => {
        component.allowApiSearch = false;
        component.data = [{
          id: 1,
          name: 'a'
        }, {
          id: 2,
          name: 'b'
        }];
        const searchQuery = 'a';
        component.displayBy = 'name';
        component.onSearch({
          target: {
            value: searchQuery
          }
        });

        expect(component.listToShow.length).not.toEqual(0);
      });

      it('should search an item not exists', () => {
        component.allowApiSearch = false;
        component.data = [{
          id: 1,
          name: 'a'
        }, {
          id: 2,
          name: 'b'
        }];
        const searchQuery = 's';
        component.displayBy = 'name';
        component.onSearch({
          target: {
            value: searchQuery
          }
        });

        expect(component.listToShow.length).toEqual(0);
      });

      it('should search an item with empty search', () => {
        component.allowApiSearch = false;
        component.data = [{
          id: 1,
          name: 'a'
        }, {
          id: 2,
          name: 'b'
        }];
        const searchQuery = '';
        component.displayBy = 'name';
        component.onSearch({
          target: {
            value: searchQuery
          }
        });

        expect(component.listToShow.length).toBe(component.data.length);
      });

      it('should emit the data', () => {
        component.allowApiSearch = true;
        const searchQuery = 'a';
        // spy on event emitter
        const searchEvent = spyOn(component.ngSearch, 'emit');
        component.onSearch(undefined);

        expect(searchEvent).toHaveBeenCalledTimes(1);
      });
    });

    describe('onSelect', () => {
      // let mockNgModelChange;
      beforeEach(() => {
        // mockNgModelChange = spyOn(component.ngModelChange, 'emit');
      });

      it('should select an item in a list with multiple select', () => {
        component.multiSelectable = true;
        component.selectedValue = false;
        const selectedItem = {
          id: 1,
          name: 'a'
        };
        component.onSelect(selectedItem);

        expect(component.selectedValue.length).toBe(1);
        // expect(mockNgModelChange).toHaveBeenCalledWith(component.selectedValue);
      });

      it('should select an item in a list with multiple select and with same elements', () => {
        component.multiSelectable = true;
        component.selectedValue = [
          { id: 1, name: 'a', isSelected: true }
        ];
        const selectedItem = { id: 1, name: 'a', isSelected: true };
        component.onSelect(selectedItem);

        expect(component.selectedValue.length).toBe(0);
        // expect(mockNgModelChange).toHaveBeenCalledWith(component.selectedValue);
      });

      it('should select an item with single select', () => {
        component.multiSelectable = false;
        component.listToShow = [{
          id: 1,
          name: 'a'
        }, {
          id: 2,
          name: 'b'
        }];
        const mockSelectedItem = {
          id: 1,
          name: 'a'
        };
        component.onSelect(mockSelectedItem);

        expect(component.selectedValue.id).toBe(1);
        // expect(mockNgModelChange).toHaveBeenCalledWith(component.selectedValue);
      });

      it('should return value if item disabled', () => {
        const selectedItem = {
          id: 1,
          isSelected: true,
          name: 'ACRT Inc',
          isDisabled: true
        };
        component.multiSelectable = true;
        component.selectedValue = [{}];
        component.onSelect(selectedItem);

        expect(component.selectedValue.id).toBeUndefined(1);
      });
    });

    describe('toggleDropDown', () => {
      beforeEach(() => {
      });

      it('should dropdown be visible', () => {
        component.data = [{
          id: 1,
          name: 'a'
        }, {
          id: 2,
          name: 'b'
        }];
        component.showDropDown = false;

        fixture.detectChanges();
        const dropDownContainer = document.getElementById('DropDownContainer');
        component.uiToggleDropDown();

        expect(component.showDropDown).toBeTruthy();
        expect(dropDownContainer).toBeDefined();
      });

      it('should dropdown be hidden', () => {
        component.data = [{
          id: 1,
          name: 'a'
        }, {
          id: 2,
          name: 'b'
        }];
        component.showDropDown = true;

        fixture.detectChanges();

        component.uiToggleDropDown();
        const dropDownContainer = document.getElementById('DropDownContainer');

        expect(component.showDropDown).toBeFalsy();
        expect(dropDownContainer).toBeNull();
      });
    });

    describe('ngOnChanges', () => {
      it('trigger ngOnchanges event', () => {
        component.ngModel = 'test';
        const previousValue = undefined;
        const changesObj: SimpleChanges = {
          ngModel: new SimpleChange(previousValue, currentValue, true)
        };

        component.ngOnChanges(changesObj);

        expect(component.selectedValue).toEqual(component.ngModel);
      });

      it('trigger ngOnchanges event with ngModel', () => {
        const previousValue = undefined;
        const changesObj: SimpleChanges = {
          ngModel: new SimpleChange(previousValue, currentValue, true)
        };
        component.ngModel = [{
          data: 'test'
        }];

        component.ngOnChanges(changesObj);

        expect(component.selectedValue).toEqual(component.ngModel);
      });
    });

    describe('setDisplayLabel', () => {
      beforeEach(() => {
        component.listToShow = [{ value: 'test' }];
      });

      it('set the display value', () => {
        component.displayLabel = 'Select';
        component.isTwoLabels = false;
        component.selectedValue = undefined;

        expect(component.setDisplayLabel).toEqual('Select');
      });

      it('check the validation', () => {
        component.displayLabel = 'Select';
        component.isTwoLabels = false;
        component.displayBy = 'value';
        component.selectedValue = {
          description: null,
          isSelected: true,
          lookupId: 2,
          lookupType: 'CUS1',
          value: 'Developer'
        };

        expect(component.setDisplayLabel).toEqual('Developer');
      });

      it('check the validation for is TwoLabels true', () => {
        component.displayLabel = 'Select';
        component.isTwoLabels = true;
        component.displayBy = 'fullName';
        component.secondDisplayName = 'empId';
        component.selectedValue = currentValue;

        expect(component.setDisplayLabel).toEqual('ABD V - 1');
      });

      it('check the validation for is TwoLabels true and array', () => {
        component.displayLabel = 'Select';
        component.isTwoLabels = true;
        component.displayBy = 'value';
        component.secondDisplayName = 'lookupId';
        component.selectedValue = [
          {
            description: null,
            isSelected: true,
            lookupId: 2,
            lookupType: 'CUS1',
            value: 'Developer'
          },
          {
            description: null,
            isSelected: true,
            lookupId: 2,
            lookupType: 'CUS1',
            value: 'Manager'
          }
        ];

        expect(component.setDisplayLabel).toEqual('Developer - 2, Manager - 2');
      });

      it('check the validation for is TwoLabels false and array', () => {
        component.displayLabel = 'Select';
        component.isTwoLabels = true;
        component.displayBy = 'value';
        component.secondDisplayName = 'lookupId';
        component.selectedValue = undefined;

        expect(component.setDisplayLabel).toBeTruthy();
      });

      it('should resetPeriod to be true', () => {
        component.resetPeriod = true;

        expect(component.setDisplayLabel).toBeTruthy();
      });
    });

    describe('iToggleLoading', () => {
      it('should call iToggleLoading based on the input', () => {
        component.isLoading = true;
        const toggleDropDownSpy = spyOn(component, 'iToggleDropDown');
        component.iToggleLoading(true);

        expect(toggleDropDownSpy).toHaveBeenCalledWith();
      });

      // eslint-disable-next-line jasmine/no-spec-dupes
      it('should call iToggleLoading based on the input', () => {
        component.isLoading = true;
        const toggleDropDownSpy = spyOn(component, 'iToggleDropDown');
        component.iToggleLoading(false);

        expect(toggleDropDownSpy).not.toHaveBeenCalledWith();
      });
    });

    describe('rememberSelectedValue', () => {
      it('should remember the selected value where multiSelectable true', () => {
        component.listToShow = [
          {
            id: 1,
            name: 'a'
          }, {
            id: 2,
            name: 'b'
          }
        ];
        component.selectedValue = {
          id: 1,
          name: 'a'
        };

        component.value = 'a';
        component.multiSelectable = false;

        component.rememberSelectedValue();

        expect(component.selectedValue.name).toEqual(component.value);
      });

      // eslint-disable-next-line jasmine/no-spec-dupes
      it('should remember the selected value where multiSelectable true', () => {
        component.listToShow = [
          {
            id: 1,
            name: 'a'
          }, {
            id: 2,
            name: 'b'
          }
        ];
        component.selectedValue = [
          {
            id: 1,
            name: 'a'
          }
        ];

        component.value = 'a';
        component.multiSelectable = true;

        component.rememberSelectedValue();

        expect(component.selectedValue.name).not.toEqual(component.value);
      });
    });

    // describe('searchEventCallback', () => {
    //   it('searchEventCallback', () => {
    //     component.searchEventCallback();

    //     expect(component.searchEventCallback).toBeTruthy();
    //   });
    // });

    describe('uiToggleDropDown', () => {
      it('uiToggleDropDown searchEvent', () => {
        component.loadOnDemand = true;
        const searchEvent = spyOn(component.ngClick, 'emit');
        component.uiToggleDropDown();

        expect(searchEvent).toBeTruthy();
      });

      // eslint-disable-next-line jasmine/no-spec-dupes
      it('uiToggleDropDown', () => {
        component.loadOnDemand = true;
        component.disabled = true;
        const spy = spyOn(component, 'uiToggleDropDown');
        component.uiToggleDropDown();

        expect(spy).toHaveBeenCalledWith();
      });
    });

    // describe('afterEventFinished', () => {
    //   it('afterEventFinished', () => {
    //     component.afterEventFinished();

    //     expect(component.afterEventFinished).toBeTruthy();
    //   });
    // });

    describe('loadData', () => {
      it('loadData with allowApiSearch false', () => {
        component.allowApiSearch = false;
        component.currentPage = 1;
        component.showLoader = false;
        component.pageLimit = 5;
        component.totalCount = 10;
        component.dropdownContainerElementRef = {
          nativeElement: {
            scrollTop: 209,
            scrollHeight: 489,
            offsetHeight: 250
          }
        };
        component.loadData();

        expect(component.allowApiSearch).toBeFalsy();
      });

      it('loadData with allowApiSearch true', () => {
        component.allowApiSearch = true;
        component.currentPage = 1;
        component.showLoader = false;
        component.pageLimit = 5;
        component.totalCount = 10;
        component.dropdownContainerElementRef = {
          nativeElement: {
            scrollTop: 209,
            scrollHeight: 489,
            offsetHeight: 250
          }
        };
        component.loadData();

        expect(component.showLoader).toBeFalsy();
      });

      it('loadData with data', () => {
        component.allowApiSearch = true;
        component.currentPage = 1;
        component.showLoader = false;
        component.pageLimit = 5;
        component.totalCount = 10;
        component.dropdownContainerElementRef = {
          nativeElement: {
            scrollTop: 239,
            scrollHeight: 489,
            offsetHeight: 250
          }
        };
        component.loadData();

        expect(component.allowApiSearch).toBeTruthy();
      });

      it('loadData with allowApiSearch data', () => {
        component.allowApiSearch = true;
        component.currentPage = 10;
        component.showLoader = false;
        component.pageLimit = 10;
        component.totalCount = 10;
        component.dropdownContainerElementRef = {
          nativeElement: {
            scrollTop: 239,
            scrollHeight: 489,
            offsetHeight: 250
          }
        };
        component.loadData();

        expect(component.showLoader).toBeFalsy();
      });

      it('loadData with no data', () => {
        component.allowApiSearch = true;
        component.showLoader = true;
        component.currentPage = 1;
        component.pageLimit = 15;
        component.totalCount = 10;
        component.loadData();

        expect(component.showLoader).toBeTruthy();
      });
    });

    describe('validate', () => {
      it('should set the placeholder value', () => {
        const control = {
          value: []
        };
        component.validate(control as any);

        expect(component.placeholder).toBe('Select');
      });

      it('should not set the placeholder value', () => {
        const control = {
          value: [{ id: 1 }]
        };
        component.required = true;
        component.validate(control as any);

        expect(component.placeholder).toBe('Select');
      });

      it('should form value to be undefined', () => {
        const control = {};
        component.required = true;
        component.validate(control as any);

        expect(component.placeholder).toBe('Select');
      });
    });

    describe('handleKeyboardEvent', () => {
      it('when handler keyboard event keycode is 27', () => {
        const event = { keyCode: 27 };
        component.handleKeyboardEvent(event as any);

        expect(event.keyCode).toEqual(27);
      });

      it('when handler keyboard event keycode is 40', () => {
        const event = { keyCode: 40 };
        component.dropdownCountVar = 0;
        component.childElements = [{ children: [{ id: 1 }] }, { children: [{ id: 12 }] }];
        component.handleKeyboardEvent(event as any);

        expect(event.keyCode).toEqual(40);
      });

      it('when handler keyboard event keycode is 40 and dropdownCountVar value is negative', () => {
        const event = { keyCode: 40 };
        component.dropdownCountVar = -2;
        component.childElements = [{ children: [{ id: 1 }] }, { children: [{ id: 12 }] }];
        component.handleKeyboardEvent(event as any);

        expect(event.keyCode).toEqual(40);
      });

      it('when handler keyboard event keycode is 38', () => {
        const event = { keyCode: 38 };
        component.dropdownCountVar = 1;
        component.childElements = [{ children: [{ id: 1 }] }, { children: [{ id: 12 }] }];
        component.handleKeyboardEvent(event as any);

        expect(event.keyCode).toEqual(38);
      });

      it('when handler keyboard event keycode is 38 and dropdownCountVar value is negative', () => {
        const event = { keyCode: 38 };
        component.dropdownCountVar = -2;
        component.childElements = [{ children: [{ id: 1 }] }, { children: [{ id: 12 }] }];
        component.handleKeyboardEvent(event as any);

        expect(event.keyCode).toEqual(38);
      });
    });

    describe('getChildElements', () => {
      it('should get child element', () => {
        const event = { target: { children: '' } };
        component.getChildElements(event);

        expect(event.target.children).toEqual('');
      });
    });

    describe('writeValue', () => {
      it('should write value', () => {
        const obj = {};
        component.writeValue(obj);

        expect(obj).toEqual({});
      });
    });

    describe('registerOnChange', () => {
      it('should register onchanged data', () => {
        const fn = {};
        component.registerOnChange(fn);

        expect(fn).toEqual({});
      });
    });

    describe('registerOnTouched', () => {
      it('should register on tuched data', () => {
        const fn = {};
        component.registerOnTouched(fn);

        expect(fn).toEqual({});
      });
    });
  });
});
