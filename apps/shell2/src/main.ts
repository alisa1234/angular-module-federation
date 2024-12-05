import {setRemoteDefinition, setRemoteDefinitions, setRemoteUrlResolver} from "@nx/angular/mf";
import {setManifest} from "./utils/getManifest";

fetch('/module-federation.manifest.json')
  .then((res) =>  res.json())
  .then((definitions) => {
    definitions.map((item: any) => {
      setRemoteDefinition(item.name, item.remoteEntry)
    });
    setManifest(definitions)
  })
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
