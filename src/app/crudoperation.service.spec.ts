import { TestBed } from '@angular/core/testing';

import { CRUDoperationService } from './crudoperation.service';

describe('CRUDoperationService', () => {
  let service: CRUDoperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDoperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
