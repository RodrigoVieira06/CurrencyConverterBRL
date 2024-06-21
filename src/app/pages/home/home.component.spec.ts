import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CurrencyConverterService } from '../../shared/services/currency/currency-converter.service';
import { ICurrencyTypes } from '../../shared/types/currency.type';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let currencyConverterService: jasmine.SpyObj<CurrencyConverterService>; // Usando jasmine.SpyObj para tipar o serviço

  const dummyCurrencies: ICurrencyTypes = {
    USD: { name: 'Dólar Americano', bid: '5.23', pctChange: '0.12', create_date: '2024-06-21' },
    EUR: { name: 'Euro', bid: '6.20', pctChange: '0.15', create_date: '2024-06-21' }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [provideHttpClient(withInterceptorsFromDi())]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    currencyConverterService = TestBed.inject(CurrencyConverterService) as jasmine.SpyObj<CurrencyConverterService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = spyOn(component['subscriptions'], 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should render currency cards', () => {
    component.currenciesData = [
      { name: 'Dólar Americano/Real Brasileiro', bid: '5.23', pctChange: '0.12', create_date: '2024-06-21 10:15:27' },
      { name: 'Euro/Libra Esterlina', bid: '6.20', pctChange: '0.15', create_date: '2024-06-21 10:15:32' }
    ];
    fixture.detectChanges();

    const currencyCards = fixture.nativeElement.querySelectorAll('app-currency-card');
    expect(currencyCards.length).toBe(3);
  });
});
