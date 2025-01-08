import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {BookingComponent} from "./app/booking/booking.component";

bootstrapApplication(BookingComponent, appConfig).catch((err) =>
  console.error(err)
);
