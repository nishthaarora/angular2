import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// import { Router } from '@angular/router';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, AboutModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }