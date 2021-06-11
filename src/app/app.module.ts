import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { CarsCatalogComponent } from './components/cars-catalog/cars-catalog.component';
import {HttpClientModule} from "@angular/common/http";
import { AddCarFromComponent } from './components/add-car-from/add-car-from.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CarsCatalogComponent,
    AddCarFromComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
