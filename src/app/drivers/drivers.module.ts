import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DriversComponent } from './drivers.component';
import { DriverService } from './shared/driver.service';
import { DriverlistComponent } from './driverlist/driverlist.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';

@NgModule({
  declarations: [
    DriversComponent,
    DriverlistComponent,
    DriverDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    DriversComponent,
    DriverlistComponent,
    DriverDetailsComponent
  ],
  providers: [
    DriverService
  ]
})
export class DriversModule { }
