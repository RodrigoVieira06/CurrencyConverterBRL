import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CurrencyConverterService } from './currency-converter.service';
import { ICurrencyTypes } from '../../types/currency.type';
import { provideHttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('CurrencyConverterService', () => {
  let service: CurrencyConverterService;
  let httpMock: HttpTestingController;

  const mockCurrencies: ICurrencyTypes = {
    USD: { code: 'USD', bid: '5.20', ask: '5.30', name: 'Dollar', pctChange: '0.5', create_date: '2024-06-23 10:00:00' },
    EUR: { code: 'EUR', bid: '6.20', ask: '6.30', name: 'Euro', pctChange: '0.6', create_date: '2024-06-23 10:00:00' }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideHttpClient()]
    });
    service = TestBed.inject(CurrencyConverterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    spyOn(service['http'], 'get').and.callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return an Observable of type ICurrencyTypes', () => {

  //   spyOn(service['http'], 'get').and.returnValue(of(mockCurrencies));

  //   service.getCurrencies().subscribe(data => {
  //     expect(data).toEqual(mockCurrencies);
  //   });

  //   expect(service.getCurrencies()).toEqual(jasmine.any(Observable));
  // });
});
