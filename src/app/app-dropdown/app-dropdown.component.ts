/* eslint-disable max-lines */
import {
  Component, OnInit, Input, EventEmitter, Output, HostListener, ElementRef, ViewChild,
  OnChanges, SimpleChanges, forwardRef, Type
} from '@angular/core';
import {
  ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators
} from '@angular/forms';
// import { setFocusEle } from 'src/app/_core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['./app-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => AppDropdownComponent)
    },
    {
      provide: NG_VALIDATORS,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => AppDropdownComponent),
      multi: true
    }
  ]
})
export class AppDropdownComponent implements OnInit, OnChanges, Validators, ControlValueAccessor {
  [x: string]: any;
  @Input() data: any;

  @Input() multiSelectable? = false;

  @Input() showTick = true;

  @Input() showAdaLabel = true;

  @Input() placeholder? = 'Select';

  @Input() selectedFilters: any;

  @Input() searchable? = false;

  @Input() disabled? = false;

  @Input() resetPeriod? = false;

  @Input() value: any;

  @Input() displayBy: any;

  @Input() ngModel: any;

  @Input() allowApiSearch: any;

  @Input() pageLimit = 10;

  @Input() totalCount: any;

  @Input() currentPage: any = 1;

  @Input() showLoader: any;

  @Input() label: any;

  @Input() isTwoLabels: any;

  @Input() secondDisplayName: any;

  @Input() required: any;

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter<any>();

  @Output() ngSearch: EventEmitter<any> = new EventEmitter<any>();

  @Output() ngScroll: EventEmitter<any> = new EventEmitter<any>();

  @Output() ngClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() loadOnDemand = false;

  selectedValue: any | Array<any>;

  listToShow: any;

  actualList: any;

  showDropDown = false;

  searchQuery: any;

  childElements: any;

  dropdownCountVar = 0;

  id = 0;

  displayLabel: any;

  searchValue: any;

  propChanges: any;

  isLoading: any;

  onTouched: any;

  onChanged: any;

  @ViewChild('search')
  searchElement!: ElementRef<any>;

  @ViewChild('dropdownContainer', { read: ElementRef })
  dropdownContainerElementRef!: ElementRef;

  @ViewChild('dropdownList', { read: ElementRef }) dropdownList!: ElementRef;

  @HostListener('document:click', ['$event.target'])
  async click(targetElement: any) {
    if ((!this.elementRef.nativeElement.contains(targetElement)
          || !this.elementRef.nativeElement.contains(targetElement?.parentElement))
        && this.showDropDown) {
      this.showDropDown = false;
      this.resetDropDown();
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      setTimeout(() => {
        this.iToggleDropDown();
      }, 500);
    }
    if (event.keyCode === 40) {
      if (this.dropdownCountVar >= 0) {
        this.dropdownCountVar += 1;
        this.id = this.childElements[this.dropdownCountVar].children[0].id;
        // setFocusEle('', this.id);
      } else {
        this.dropdownCountVar = 0;
      }
    }
    if (event.keyCode === 38) {
      if (this.dropdownCountVar >= 0) {
        this.dropdownCountVar -= 1;
        this.id = this.childElements[this.dropdownCountVar].children[0].id;
        // setFocusEle('', this.id);
      } else {
        this.dropdownCountVar = 0;
      }
    }
  }

  iToggleLoading(dataLoaded: any) {
    this.isLoading = !this.isLoading;

    if (dataLoaded) {
      this.iToggleDropDown();
    }
  }

  constructor(private elementRef: ElementRef) {
    
  }

  ngOnInit(): void {
    this.listToShow = this.data;

    this.displayLabel = this.placeholder;

    if (this.multiSelectable) {
      this.selectedValue = this.ngModel;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.propChanges = changes;
    this.listToShow = this.data;
    this.selectedValue = this.ngModel;

    this.rememberSelectedValue();

    this.setHeight();
    this.showLoader = false;
    // if(this.onChanged) this.onChanged(this.ngModel);
  }

  setHeight() {
    // if (this.listToShow.length < 6) {
    //   this.dropdownContainer.nativeElement.style.height = ""
    // }
  }

  validate(control: FormControl) {
    if (!this.required) {
      return null;
    }
    let error = null;
    if (!control.value) {
      this.placeholder = 'Select';
    }
    if (!control.value) {
      error = error || {};
      // error.isRequired = true;
      // error.valid = false;
      return error;
    }
    return null;
  }

  rememberSelectedValue() {
    if (this.listToShow && this.listToShow.length) {
      this.listToShow.map((item: any) => {
        if (this.multiSelectable && this.selectedValue) {
          const cpy = this.selectedValue;
          item.isSelected = !!cpy.filter((val: any) => val[this.value] === item[this.value])[0];
        } else {
          item.isSelected = item[this.value] === (this.selectedValue instanceof Object && this.selectedValue && this.value
            ? this.selectedValue[this.value] : this.selectedValue);
        }
        return item;
      });
    }
  }

  onSelect(param: any, event?: any): void {
    this.dropdownCountVar = 0;

    const item = param;
    if (item.isDisabled) { return; }
    this.searchValue = '';
    if (this.multiSelectable) {
      if (!this.selectedValue) {
        this.selectedValue = [];
      }
      const foundItemIndex = this.selectedValue.findIndex(
        (value: { [x: string]: any; }) => value[this.value] === item[this.value]
      );

      if (foundItemIndex > -1) {
        item.isSelected = false;
        this.selectedValue.splice(foundItemIndex, 1);
      } else {
        item.isSelected = true;
        this.selectedValue.push(item);
      }
      if (!event) {
        this.ngModelChange.emit(this.selectedValue);
      }
    } else {
      this.listToShow.map((iterator: any) => {
        const list = iterator;
        list.isSelected = item[this.value] === list[this.value];
        return list;
      });

      this.selectedValue = item;

      this.iToggleDropDown();
      this.ngModelChange.emit(this.selectedValue);
    }
    // this.ngModelChange.emit(this.selectedValue);
  }

  onSearch($event: any): void {
    const searchQuery = $event?.target?.value || '';

    this.searchQuery = searchQuery;

    this.currentPage = 0;

    if (this.allowApiSearch) {
      this.ngSearch.emit({
        currentPage: this.currentPage,
        type: 'search',
        searchQuery
        // event: this.searchEventCallback.bind(this)
      });
    } else if (searchQuery === '') {
      this.listToShow = this.data;
    } else {
      this.listToShow = this.data.filter((item: any) => {
        if (item[this.displayBy].toUpperCase().includes(searchQuery.toUpperCase())) {
          return item;
        }
      });
    }

    this.currentPage = 1;
  }

  // searchEventCallback() {
  //   // this.dropdownContainerElementRef?.nativeElement?.scrollTop();
  // }

  onCancel(): void {
    this.searchValue = '';
    this.listToShow = this.data;
  }

  uiToggleDropDown(): void {
    if (!this.disabled) {
      if (this.showDropDown) {
        this.iToggleDropDown();
        return;
      }

      if (this.loadOnDemand) {
        this.ngClick.emit({
          toggleLoading: this.iToggleLoading.bind(this)
        });
      } else {
        this.iToggleDropDown();
      }
    }
  }

  iToggleDropDown() {
    this.showDropDown = !this.showDropDown;
    if (!this.showDropDown) {
      this.resetDropDown();
    }
  }

  private resetDropDown() {
    this.searchQuery = '';

    this.searchValue = '';

    this.onSearch('');

    this.currentPage = 1;
  }

  get setDisplayLabel() {
    this.displayLabel = this.placeholder;
    if (this.isTwoLabels) {
      if (this.selectedValue && this.selectedValue instanceof Array && this.selectedValue.length) {
        const values = this.selectedValue.map((value) => `${value[this.displayBy]} - ${value[this.secondDisplayName]}`);
        this.displayLabel = values.join(', ');
      } else if (this.selectedValue && typeof this.selectedValue === 'object' && Object.keys(this.selectedValue).length) {
        this.displayLabel = `${this.selectedValue[this.displayBy]} - ${this.selectedValue[this.secondDisplayName]}`;
      }
    } else if (this.selectedValue && this.selectedValue instanceof Array
      && this.selectedValue.length) {
      const values = this.selectedValue.map((value) => value[this.displayBy]);
      this.displayLabel = values.join(', ');
    } else if (this.selectedValue && Object.keys(this.selectedValue).length) {
      this.displayLabel = this.selectedValue[this.displayBy];
    } else {
      const foundItem = this.listToShow instanceof Array
        ? this.listToShow?.find((list) => list[this.value] === this.selectedValue) : undefined;
      this.displayLabel = foundItem ? foundItem[this.displayBy] : this.placeholder;
    }

    if (this.resetPeriod) {
      this.displayLabel = this.placeholder;
    }
    return this.displayLabel ? this.displayLabel : this.placeholder;
  }

  // afterEventFinished() {
  // }

  loadData() {
    if (!this.allowApiSearch) { return; }
    if (this.showLoader) { return; }
    const top = this.dropdownContainerElementRef.nativeElement.scrollTop;
    const height = (this.dropdownContainerElementRef.nativeElement.scrollHeight
      - this.dropdownContainerElementRef.nativeElement.offsetHeight);
    if ((height - top) > 0) { return; }

    const skip = this.currentPage * this.pageLimit;
    if (skip < this.totalCount) {
      this.showLoader = true;
      setTimeout(() => {
        this.currentPage += 1;
        this.ngScroll.emit({
          type: 'scroll',
          currentPage: skip,
          searchQuery: this.searchQuery
          // event: this.afterEventFinished.bind(this)
        });
        const element = document.getElementById('list');
        this.getChildElements(element);
      }, 500);
    }
  }

  getChildElements(event: any) {
    if (event?.target) {
      this.childElements = event.target.children;
    }
  }

  /**
  * Selected model should be set to ngModel
  * @param obj - The obj triggered on input changes
  */
  writeValue(obj: any): void {
    this.ngModel = obj;
  }

  /**
    * Default method for ControlValueAccessor
    */
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  /**
    * Default method for ControlValueAccessor
    */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
