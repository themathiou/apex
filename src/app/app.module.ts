import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DriversModule } from './drivers/drivers.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DriversModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
