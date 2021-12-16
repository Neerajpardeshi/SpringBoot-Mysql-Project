import { TestBed } from '@angular/core/testing';

import { EditEmployeeService } from './edit-employee.service';

describe('EditEmployeeService', () => {
  let service: EditEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
