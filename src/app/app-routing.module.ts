import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';

const routes: Routes = [
  { path: '', redirectTo: '/standings', pathMatch: 'full' }, // default route
  { path: 'standings', component: DriversComponent },
  { path: 'standings/:id', component: DriversComponent },
  { path: '**', component: DriversComponent } // TODO 404 page
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
