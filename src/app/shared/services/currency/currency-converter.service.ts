import { Injectable } from '@angular/core';
import { Observable, shareReplay, switchMap, timer } from 'rxjs';
import { ICurrencyTypes } from '../../types/currency.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  private baseURL: string = environment.CURRENCY_CONVERTER_API_BASE_URL;
  private endpoint: string = environment.CURRENCY_CONVERTER_API_GET_ENDPOINT;

  private cacheObservable$: Observable<ICurrencyTypes> | null = null;

  constructor(private http: HttpClient) { }

  public getCurrencies(): Observable<ICurrencyTypes> {
    const url = this.baseURL + this.endpoint;

    if (!this.cacheObservable$) {
      this.cacheObservable$ = timer(0, 180000).pipe(
        switchMap(() => this.http.get<ICurrencyTypes>(url)),
        shareReplay(1)
      );
    }

    return this.cacheObservable$;
  }
}
