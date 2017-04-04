import 'zone.js';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// import 'zone.js/dist/zone';
// import 'core-js';
// import 'reflect-metadata'
// import './polyfills'

// console.info('app.environment', app.environment);
// if(app.environment === 'production') {
//     enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule);