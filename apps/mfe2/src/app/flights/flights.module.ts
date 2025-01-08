import { NgModule } from '@angular/core';
import {FlightsComponent} from "./flights.component";
import {RouterModule} from "@angular/router";
import {FLIGHTS_ROUTES} from "./flights.routes";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(FLIGHTS_ROUTES),
    FlightsComponent
  ]
})
export class FlightModule { }
