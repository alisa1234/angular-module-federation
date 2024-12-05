import { NgModule } from '@angular/core';
import {BookingComponent} from "./booking.component";
import {RouterModule} from "@angular/router";
import {BOOKING_ROUTES} from "./booking.routes";



@NgModule({
  declarations: [],
  imports: [
    BookingComponent,
    RouterModule.forChild(BOOKING_ROUTES),
  ]
})
export class BookingModule { }
