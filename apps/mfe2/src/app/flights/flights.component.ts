import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { AuthServiceService } from '@angular-module-federation/auth-lib';

@Component({
  selector: 'angular-module-federation-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss',
})
export class FlightsComponent {
  user = '';
  flightsList = [
    {
      destination: 'Madrid - Rome',
      number: 'MN234044'
    },
    {
      destination: 'Valencia - Warshaw',
      number: 'PT326669'
    },
    {
      destination: 'Paris - Milan',
      number: 'LD569932'
    },
  ]

  constructor(private service: AuthServiceService) {
    this.user = this.service.user;
  }
}
