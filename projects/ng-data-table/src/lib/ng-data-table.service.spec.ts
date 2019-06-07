import { TestBed } from '@angular/core/testing';

import { NgDataTableService } from './ng-data-table.service';

describe('NgDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDataTableService = TestBed.get(NgDataTableService);
    expect(service).toBeTruthy();
  });
});
