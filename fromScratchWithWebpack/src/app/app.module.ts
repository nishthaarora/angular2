import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AboutModule } from './about/about.module';
import { HomeModule } from './Home/home.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AboutModule, HomeModule, 
  AppRouting ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }