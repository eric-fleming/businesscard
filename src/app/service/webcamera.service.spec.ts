import { TestBed } from '@angular/core/testing';

import { WebcameraService } from './webcamera.service';

describe('WebcameraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebcameraService = TestBed.get(WebcameraService);
    expect(service).toBeTruthy();
  });
});
