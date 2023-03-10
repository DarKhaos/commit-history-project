import { TestBed } from '@angular/core/testing';

import { CommitListTableService } from './commit-list-table.service';

describe('CommitListTableService', () => {
  let service: CommitListTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitListTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
