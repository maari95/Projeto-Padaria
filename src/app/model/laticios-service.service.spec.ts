import { TestBed } from '@angular/core/testing';
import { LaticiosServiceService } from './laticios-service.service';

describe('LaticiosServiceService', () => {
  let service: LaticiosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaticiosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
