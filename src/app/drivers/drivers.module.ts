import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DriversComponent } from './drivers.component';
import { DriverService } from './shared/driver.service';

@NgModule({
  declarations: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    DriversComponent
  ],
  providers: [
    DriverService
  ]
})
export class DriversModule { }
