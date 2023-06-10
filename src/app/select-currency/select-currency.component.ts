import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.scss'],
})
export class SelectCurrencyComponent {
  ngOninit() {}

  selectedOptionOne: string = 'pln';
  selectedOptionTwo: string = 'pln';

  selectCurrencyForm: FormGroup = new FormGroup({
    amount: new FormControl('', [
      Validators.required,
      Validators.pattern('/^[0-9]+(.[0-9]{1,2})?$/'),
    ]),
    currency: new FormControl(Validators.required),
  });

  diffCurrencyForm: FormGroup = new FormGroup({
    currencySec: new FormControl(Validators.required),
  });
}
