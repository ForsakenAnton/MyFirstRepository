import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//BillGatesSpeaksComponent 
// автоматически добавился после (cd MyFirstAppOnAngular опционально и) ng generate component BillGatesSpeaks
import { BillGatesSpeaksComponent } from './bill-gates-speaks/bill-gates-speaks.component';

@NgModule({
  declarations: [
    AppComponent,
    BillGatesSpeaksComponent // тут же
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
