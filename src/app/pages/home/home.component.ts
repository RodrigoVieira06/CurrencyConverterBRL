import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CurrencyCardComponent } from '../../shared/components/currency-card/currency-card.component';
import { ICurrency, ICurrencyTypes } from '../../shared/types/currency.type';
import { CurrencyConverterService } from '../../shared/services/currency/currency-converter.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurrencyCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
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
      this.getCurrenciesData();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public getCurrenciesData(): void {
    this.onLoading = true;
    this.currenciesData = environment.INITIAL_CURRENCIES_MOCKDATA;

    this.subscriptions.add(this.currencyConverterService.getCurrencies().subscribe({
      next: (currencyConverterAPIResponse: ICurrencyTypes) => {
        this.currenciesData = Object.values(currencyConverterAPIResponse);
        this.onError = false;
        this.onLoading = false;
      },
      error: () => {
        this.onError = true;
        this.onLoading = false;
      }
    }));
  }
}
