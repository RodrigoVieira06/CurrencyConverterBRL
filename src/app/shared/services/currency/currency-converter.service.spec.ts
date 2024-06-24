import { TestBed, fakeAsync } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CurrencyConverterService } from './currency-converter.service';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('CurrencyConverterService', () => {
  let service: CurrencyConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideHttpClient()]
    });
    service = TestBed.inject(CurrencyConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable of type ICurrencyTypes', fakeAsync(() => {
    expect(service.getCurrencies()).toEqual(jasmine.any(Observable));
  }));
});
