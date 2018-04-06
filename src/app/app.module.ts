import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import {Router} from '@angular/router';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  AboutComponent,
                  SearchComponent,
                  Router],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
