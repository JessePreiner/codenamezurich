/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicationsService } from './publications.service';

describe('Service: Publications', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicationsService]
    });
  });

  it('should ...', inject([PublicationsService], (service: PublicationsService) => {
    expect(service).toBeTruthy();
  }));
});
