import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyCardComponent } from './currency-card.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { By } from '@angular/platform-browser';


describe('currency-cardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCardComponent],
      providers: [provideHttpClient(withInterceptorsFromDi())]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurrencyCardComponent);
    component = fixture.componentInstance;

    component.entity = {
      name: 'Brasil/Canadá',
      bid: '1.999',
      pctChange: '-0.12',
      create_date: '21/06/2024 08:23:17',
    }
    component.onLoading = false;
    component.onError = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should process currency data correctly', () => {
    component.currencyDataTreatment();
    expect(component.entity.name).toBe('Brasil');
    expect(component.entity.bid).toBe('1,999');
    expect(component.entity.pctChange).toBe('-0,12');
    expect(component.entity.create_date).toBe('08:23:17');
  });

  it('should return correct classes based on bid value', () => {
    component.entity.bid = '0.50';
    expect(component.addingBidColorClass()).toEqual({ 'red-condition': true, 'blue-condition': false });

    component.entity.bid = '1.00';
    expect(component.addingBidColorClass()).toEqual({ 'red-condition': true, 'blue-condition': false });

    component.entity.bid = '3.00';
    expect(component.addingBidColorClass()).toEqual({ 'red-condition': false, 'blue-condition': false });

    component.entity.bid = '5.00';
    expect(component.addingBidColorClass()).toEqual({ 'red-condition': false, 'blue-condition': false });

    component.entity.bid = '6.00';
    expect(component.addingBidColorClass()).toEqual({ 'red-condition': false, 'blue-condition': true });
  });

  it('should display error message and reload button when onError is true', () => {
    component.onError = true;
    component.onLoading = false;
    fixture.detectChanges();

    const errorSection = fixture.debugElement.query(By.css('.card-container__error'));
    expect(errorSection).toBeTruthy();
    expect(errorSection.nativeElement.textContent).toContain('Algo deu errado');

    const reloadButton = fixture.debugElement.query(By.css('button'));
    expect(reloadButton).toBeTruthy();
  });

  it('should display loading spinner when onLoading is true', () => {
    component.onLoading = true;
    fixture.detectChanges();

    const loadingSection = fixture.debugElement.query(By.css('.card-container__loading'));
    expect(loadingSection).toBeTruthy();
  });
});
