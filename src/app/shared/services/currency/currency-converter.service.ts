import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, repeat } from 'rxjs';
import { ICurrencyTypes } from '../../types/currency.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  private baseURL: string = environment.CURRENCY_CONVERTER_API_BASE_URL;
  private endpoint: string = environment.CURRENCY_CONVERTER_API_GET_ENDPOINT;

  private cache$: BehaviorSubject<ICurrencyTypes | null> = new BehaviorSubject<ICurrencyTypes | null>(null);

  constructor(private http: HttpClient) { }

  public getCurrencies(): Observable<ICurrencyTypes> {
    const url = this.baseURL + this.endpoint;

    return this.http.get<ICurrencyTypes>(url)
      .pipe(
        repeat({ delay: 180000 }),
        map((response: ICurrencyTypes) => {
          this.cache$.next(response)
          return this.cache$.getValue()!;
        })
      );
  }

  public clearCache(): void {
    this.cache$.next(null);
  }
}
