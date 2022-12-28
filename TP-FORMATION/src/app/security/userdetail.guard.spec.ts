import { TestBed } from '@angular/core/testing';

import { UserdetailGuard } from './userdetail.guard';

describe('UserdetailGuard', () => {
  let guard: UserdetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserdetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
