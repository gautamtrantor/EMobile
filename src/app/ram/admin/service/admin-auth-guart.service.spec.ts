import { TestBed, inject } from '@angular/core/testing';

import { AdminAuthGuartService } from './admin-auth-guart.service';

describe('AdminAuthGuartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuartService]
    });
  });

  it('should be created', inject([AdminAuthGuartService], (service: AdminAuthGuartService) => {
    expect(service).toBeTruthy();
  }));
});
