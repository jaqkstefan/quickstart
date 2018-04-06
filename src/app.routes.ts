import {provideRoutes, LoadedRouterConfig} from '@angular/router';
import { SearchComponent } from './app/components/search/search.component';
import { AboutComponent } from './app/components/about/about.component';
import { LoadedRouterConfig } from '@angular/router/src/config';

const routes: LoadedRouterConfig= [
    {path:'', component:SearchComponent},
    {path:'about', component:AboutComponent}
];

export const appRouterProviders = [
    provideRoutes(routes);
];

