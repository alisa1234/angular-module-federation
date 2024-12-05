import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import {BookingComponent} from "./app/booking/booking.component";

bootstrapApplication(BookingComponent, appConfig).catch((err) =>
  console.error(err)
);
