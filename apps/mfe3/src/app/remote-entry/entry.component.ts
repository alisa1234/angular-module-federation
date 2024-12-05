import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  selector: 'angular-module-federation-mfe3-entry',
  template: `<p>Remote component</p><router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}
