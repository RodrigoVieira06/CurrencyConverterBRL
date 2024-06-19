import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CurrencyCardComponent } from '../../shared/components/currency-card/currency-card.component';
import { ICurrency, ICurrencyTypes } from '../../shared/types/currency.type';
import { CurrencyConverterService } from '../../shared/services/currency/currency-converter.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription, catchError, switchMap, tap, throwError, timer } from 'rxjs';
import { formatCreateDate, removingFirstCurrencyName } from '../../shared/utils/utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurrencyCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  public currenciesData: ICurrency[] = [];

  public onError: boolean = false;
  public onLoading: boolean = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private currencyConverterService: CurrencyConverterService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.subscriptions.add(this.getCurrenciesData());
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public getCurrenciesData(): Subscription {
    this.onLoading = true;
    this.currenciesData = [
      {
        name: 'Dólar Canadense',
        bid: '',
        pctChange: '',
        create_date: ''
      },
      {
        name: 'Peso Argentino',
        bid: '',
        pctChange: '',
        create_date: ''
      },
      {
        name: 'Libra Esterlina',
        bid: '',
        pctChange: '',
        create_date: ''
      }
    ];

    return timer(0, 180000)
      .pipe(
        switchMap(() => this.currencyConverterService.getCurrencies()),
        tap((currencyConverterAPIResponse: ICurrencyTypes) => {
          let currencies: ICurrency[] = [];
          for (const currencyCode in currencyConverterAPIResponse) {
            currencies.push(currencyConverterAPIResponse[currencyCode]);
          }
          this.currenciesData = [...currencies];
          this.currencyDataTreatment();
          this.onError = false;
          this.onLoading = false;
        }),
        catchError((err) => {
          this.onError = true;
          this.onLoading = false;
          return throwError(() => err);
        })
      )
      .subscribe();
  }

  private currencyDataTreatment() {
    this.currenciesData.map((currency) => {
      currency.name = removingFirstCurrencyName(currency.name);
      currency.bid = currency.bid.replace('.', ',');
      currency.pctChange = currency.pctChange.replace('.', ',');
      currency.create_date = formatCreateDate(currency.create_date);
    })
  }
}
