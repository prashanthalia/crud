import { TestBed } from '@angular/core/testing';

import { ServiesService } from './servies.service';

describe('ServiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiesService = TestBed.get(ServiesService);
    expect(service).toBeTruthy();
  });
});
