import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICurrency } from '../../types/currency.type';
import { CommonModule } from '@angular/common';
import { CurrencyConverterService } from '../../services/currency/currency-converter.service';
import { formatCreateDate, removingFirstCurrencyName } from '../../utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss'
})
export class CurrencyCardComponent implements OnInit {
  @Input() public entity!: ICurrency;
  @Input() public onLoading!: boolean;
  @Input() public onError!: boolean;

  @Output() public retryRequest = new EventEmitter<void>();

  constructor(
    public currencyConverterService: CurrencyConverterService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.currencyDataTreatment();
  }

  public addingBidColorClass() {
    const checkRedColor: boolean = parseFloat(this.entity.bid) <= 1;
    const checkBlueColor: boolean = parseFloat(this.entity.bid) > 5;

    return {
      'red-condition': checkRedColor,
      'blue-condition': checkBlueColor
    };
  }

  public currencyDataTreatment() {
    this.entity.name = removingFirstCurrencyName(this.entity.name);
    this.entity.bid = this.entity.bid.replace('.', ',');
    this.entity.pctChange = this.entity.pctChange.replace('.', ',');
    this.entity.create_date = formatCreateDate(this.entity.create_date);
  }

  public reloadCurrencyMainComponent(): void {
    this.retryRequest.emit();
  }
}
