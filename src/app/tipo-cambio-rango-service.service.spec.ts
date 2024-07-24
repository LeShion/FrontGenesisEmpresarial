import { TestBed } from '@angular/core/testing';

import { TipoCambioRangoServiceService } from './tipo-cambio-rango-service.service';

describe('TipoCambioRangoServiceService', () => {
  let service: TipoCambioRangoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoCambioRangoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
