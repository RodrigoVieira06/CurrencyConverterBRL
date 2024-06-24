import { Injectable } from '@angular/core';
import { Observable, shareReplay, switchMap, timer } from 'rxjs';
import { ICurrencyTypes } from '../../types/currency.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  public baseURL: string = environment.CURRENCY_CONVERTER_API_BASE_URL;
  public endpoint: string = environment.CURRENCY_CONVERTER_API_GET_ENDPOINT;

  public cacheObservable$: Observable<ICurrencyTypes> | null = null;

  constructor(public http: HttpClient) { }

  public getCurrencies(): Observable<ICurrencyTypes> {
    if (!this.cacheObservable$) {
      const url = this.baseURL + this.endpoint;
      this.cacheObservable$ = timer(0, 180000)
        .pipe(
          switchMap(() => this.http.get<ICurrencyTypes>(url))
        );
    }

    return this.cacheObservable$;
  }
}
