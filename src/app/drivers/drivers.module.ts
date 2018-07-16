import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DriverService } from './shared/services/driver.service';

import { DriversComponent } from './drivers.component';
import { DriverlistComponent } from './driverlist/driverlist.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { FilterNamePipe } from './shared/pipes/filterName.pipe';

@NgModule({
  declarations: [
    DriversComponent,
    DriverlistComponent,
    DriverDetailsComponent,
    FilterNamePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    JsonpModule,
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
