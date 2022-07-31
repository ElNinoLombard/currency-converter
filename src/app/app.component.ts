import { Component } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { CurrencyapidataService } from './currencyapidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
  currjson: any = [];

  base = 'USD';
  country2 = 'USD';
  result: string = '1';

  changeBase = (a: string) => {
    this.base = a;
  }

  toCountry = (b: string) => {
    this.country2 = b;
  }

  constructor(private currency: CurrencyapidataService) {  }
    // console.log(this.base);
    // console.log(this.country2);
  convert = () => {
    this.currency.getCurrencyData(this.base).subscribe(data => {
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);
    

      if(this.country2 == 'USD') {
        this.result = this.currjson.rates.USD
      }

      if(this.country2 == 'MXN') {
        this.result = this.currjson.rates.MXN
      }

      if(this.country2 == 'EUR'){
        this.result = this.currjson.rates.EUR
      }
    })
  }
}
