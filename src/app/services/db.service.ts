import { Injectable } from '@angular/core';
import { rates } from '../db/exchange-rates';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  getRates() {
    return rates;
  }
}
