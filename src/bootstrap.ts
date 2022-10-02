import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core'];

(window as any).angularPlatform = {
  [ngVersion]: platformBrowserDynamic()
};

(window as any).angularPlatform[ngVersion]
  .bootstrapModule(AppModule)
  .then(ref => {
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  })
  .catch((err: any) => console.error(err));
