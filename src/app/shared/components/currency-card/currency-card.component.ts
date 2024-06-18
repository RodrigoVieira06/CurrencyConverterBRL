import { Component, Input } from '@angular/core';
import { ICurrency } from '../../types/currency.type';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss'
})
export class CurrencyCardComponent {
  @Input() public entity!: ICurrency;
}
