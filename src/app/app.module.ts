import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectCurrencyComponent } from './select-currency/select-currency.component';
import { ConvertedCurrencyComponent } from './converted-currency/converted-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCurrencyComponent,
    ConvertedCurrencyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
