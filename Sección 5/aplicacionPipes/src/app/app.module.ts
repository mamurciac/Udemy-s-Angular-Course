import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {registerLocaleData} from '@angular/common';
import localES from '@angular/common/locales/es';
import localFR from '@angular/common/locales/fr';

registerLocaleData(localES);
registerLocaleData(localFR);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { MostrarContrasenaPipe } from './pipes/mostrar-contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    MostrarContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
