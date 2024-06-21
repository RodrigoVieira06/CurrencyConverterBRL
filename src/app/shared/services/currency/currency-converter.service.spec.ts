import { TestBed } from '@angular/core/testing';

import { CurrencyConverterService } from './currency-converter.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ICurrencyTypes } from '../../types/currency.type';
import { environment } from '../../../../environments/environment';

describe('CurrencyConverterService', () => {
  let service: CurrencyConverterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    service = TestBed.inject(CurrencyConverterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch currencies data', () => {
    const dummyCurrencies: ICurrencyTypes = {
      USD: { name: 'Dólar Americano/Real Brasileiro', bid: '5.23', pctChange: '0.12', create_date: '2024-06-21 10:15:27' },
      EUR: { name: 'Euro/Libra Esterlina', bid: '6.20', pctChange: '0.15', create_date: '2024-06-21 10:15:32' }
    };

    service.getCurrencies().subscribe((data: ICurrencyTypes) => {
      expect(data).toEqual(dummyCurrencies);
    });

    const req = httpMock.expectOne(`${environment.CURRENCY_CONVERTER_API_BASE_URL}${environment.CURRENCY_CONVERTER_API_GET_ENDPOINT}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCurrencies);
  });

  it('should clear cache', () => {
    const dummyCurrencies: ICurrencyTypes = {
      USD: { name: 'Dólar Americano/Real Brasileiro', bid: '5.23', pctChange: '0.12', create_date: '2024-06-21 10:15:27' },
      EUR: { name: 'Euro/Libra Esterlina', bid: '6.20', pctChange: '0.15', create_date: '2024-06-21 10:15:32' }
    };

    service.getCurrencies().subscribe();

    const req = httpMock.expectOne(`${environment.CURRENCY_CONVERTER_API_BASE_URL}${environment.CURRENCY_CONVERTER_API_GET_ENDPOINT}`);
    req.flush(dummyCurrencies);

    service.clearCache();

    service.getCurrencies().subscribe((data: ICurrencyTypes | null) => {
      expect(data).toBeNull();
    });
  });
});
