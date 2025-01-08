import {Routes} from "@angular/router";
import {loadRemoteModule} from "@nx/angular/mf";
import {appRoutes} from "../app/app.routes";

export function buildRoutes(options: any): Routes {
  const lazyRoutes: Routes = options.map((item: any) => {
    const name = item.name;
    const entry: any = item;
    return {
      path: entry.routePath,
      loadChildren: () =>
        loadRemoteModule(name, entry.exposedModule)
          .then(m =>  m[entry.ngModuleName])
    }
  })
  return [...appRoutes, ...lazyRoutes]
}
