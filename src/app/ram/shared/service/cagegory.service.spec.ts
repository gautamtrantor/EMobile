import { TestBed, inject } from '@angular/core/testing';

import { CagegoryService } from './cagegory.service';

describe('CagegoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CagegoryService]
    });
  });

  it('should be created', inject([CagegoryService], (service: CagegoryService) => {
    expect(service).toBeTruthy();
  }));
});
