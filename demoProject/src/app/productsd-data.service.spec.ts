import { TestBed } from '@angular/core/testing';

import { ProductsdDataService } from './productsd-data.service';

describe('ProductsdDataService', () => {
  let service: ProductsdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
