import { TestBed } from '@angular/core/testing';

import { BackFicheService } from './back-fiche.service';

describe('BackFicheService', () => {
  let service: BackFicheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackFicheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
