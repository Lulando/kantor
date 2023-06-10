import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../services/db.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-converted-currency',
  templateUrl: './converted-currency.component.html',
  styleUrls: ['./converted-currency.component.scss'],
})
export class ConvertedCurrencyComponent {
  constructor(private dbService: DbService) {}

  @Input() amount: string = '';
  @Input() curr: string = '';

  rates: any = this.dbService.getRates();

  selectedOption: string = 'pln';

  diffCurrencyForm: FormGroup = new FormGroup({
    currency: new FormControl(Validators.required),
  });

  convertToNumber(str: string) {
    return Number(str);
  }
}
