import { TestBed } from '@angular/core/testing';

import { Alanch8PageNotFoundService } from './alanch8-page-not-found.service';

describe('Alanch8PageNotFoundService', () => {
  let service: Alanch8PageNotFoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alanch8PageNotFoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
