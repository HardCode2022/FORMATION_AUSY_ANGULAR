import { TestBed, async, inject } from '@angular/core/testing';

import { GuardsDetailsGuard } from './guards-details.guard';

describe('GuardsDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsDetailsGuard]
    });
  });

  it('should ...', inject([GuardsDetailsGuard], (guard: GuardsDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
