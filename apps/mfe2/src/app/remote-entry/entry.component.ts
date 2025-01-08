import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightsComponent} from "../flights/flights.component";

@Component({
  standalone: true,
  imports: [CommonModule, FlightsComponent],
  selector: 'angular-module-federation-mfe2-entry',
  template: `<angular-module-federation-flights></angular-module-federation-flights>`,
})
export class RemoteEntryComponent {}
