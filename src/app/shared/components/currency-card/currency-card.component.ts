import { Component, Input } from '@angular/core';
import { ICurrency } from '../../types/currency.type';
import { CommonModule } from '@angular/common';
import { CurrencyConverterService } from '../../services/currency/currency-converter.service';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss'
})
export class CurrencyCardComponent {
  @Input() public entity!: ICurrency;
  @Input() public onLoading!: boolean;
  @Input() public onError!: boolean;

  @Input() public reloadEntityData!: () => void;

  constructor(public currencyConverterService: CurrencyConverterService) {}

  public addingBidColorClass() {
    const checkRedColor: boolean = parseFloat(this.entity.bid) <= 1;
    const checkBlueColor: boolean = parseFloat(this.entity.bid) > 5;

    return {
      'red-condition': checkRedColor,
      'blue-condition': checkBlueColor
    };
  }
}
