import { TestBed } from '@angular/core/testing';

import { BackPersonneService } from './back-personne.service';

describe('BackPersonneService', () => {
  let service: BackPersonneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackPersonneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
