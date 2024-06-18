import { Component } from '@angular/core';
import { CurrencyCardComponent } from '../../shared/components/currency-card/currency-card.component';
import { ICurrency } from '../../shared/types/currency.type';
import { CurrencyConverterService } from '../../shared/services/currency-converter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,CurrencyCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public currenciesData: ICurrency[];

  constructor(
    private currencyConverterService: CurrencyConverterService
  ) {
    this.currenciesData = this.getCurrenciesData();
  }

  public getCurrenciesData(): ICurrency[] {
    return [
      {
        title: 'Dólar',
        Value: '0,00',
        Variation: '0,11',
        Updated: '00:00:00'
      },
      {
        title: 'Dólar',
        Value: '0,00',
        Variation: '0,11',
        Updated: '00:00:00'
      },
      {
        title: 'Dólar',
        Value: '0,00',
        Variation: '0,11',
        Updated: '00:00:00'
      },
    ];
  }
}
