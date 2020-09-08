import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
