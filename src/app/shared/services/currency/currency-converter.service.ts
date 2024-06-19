import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ICurrencyTypes } from '../../types/currency.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  private baseURL: string = environment.CURRENCY_CONVERTER_API_BASE_URL;
  private endpoint: string = environment.CURRENCY_CONVERTER_API_GET_ENDPOINT;

  private cache: BehaviorSubject<ICurrencyTypes | null> = new BehaviorSubject<ICurrencyTypes | null>(null);

  constructor(private http: HttpClient) { }

  public getCurrencies(): Observable<ICurrencyTypes> {
    if (this.cache.getValue() !== null) {
      this.cache.next(null);
    }
    return this.http.get<ICurrencyTypes>(this.baseURL + this.endpoint)
      .pipe(
        map((response) => {
          this.cache.next(response);
          return response;
        })
      )
  }
}
