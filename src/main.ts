import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {appRouterProviders} from './app.routes';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppComponent, appRouterProviders);
