import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, repeat, tap } from 'rxjs';
import { ICurrencyTypes } from '../../types/currency.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
    const options = { headers: headers };
    const url = this.baseURL + this.endpoint;

    return this.http.get<ICurrencyTypes>(url, options).pipe(
      repeat({ delay: 180000 }),
      tap((response: ICurrencyTypes) => {
        this.cache$.next(response)
      })
    );
  }

  public clearCache(): void {
    this.cache$.next(null);
  }
}
