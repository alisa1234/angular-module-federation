import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import {HomeComponent} from "./home/home.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'flights',
    loadChildren: () => loadRemoteModule('mfe2', './FlightModule')
      .then(m => m.FlightModule)
  },
  {
    path: 'bookings',
    loadChildren: () => loadRemoteModule( 'mfe3', './BookingModule')
      .then(m => m.BookingModule)
  },
];
