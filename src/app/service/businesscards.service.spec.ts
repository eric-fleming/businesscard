import { TestBed } from '@angular/core/testing';

import { BusinesscardsService } from './businesscards.service';

describe('BusinesscardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinesscardsService = TestBed.get(BusinesscardsService);
    expect(service).toBeTruthy();
  });
});
