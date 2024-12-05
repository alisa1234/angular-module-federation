import {Component, OnInit} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import { AuthServiceService } from '@angular-module-federation/auth-lib';
import {getManifest} from "../utils/getManifest";
import {buildRoutes} from "../utils/routes";
import {NgForOf} from "@angular/common";

interface CustomRemoteConfig {
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
}
@Component({
  standalone: true,
  imports: [RouterModule, NgForOf],
  selector: 'angular-module-federation-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  remotes: CustomRemoteConfig[] = [];

  constructor(private router: Router, private service: AuthServiceService) {
    this.service.login('Max', null);
  }
  ngOnInit() {
    const manifest = getManifest();
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
    this.remotes = manifest;
  }
}
