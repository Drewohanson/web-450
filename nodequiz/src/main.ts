/*
=====================================
  ; Title: main.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: nodequiz
======================================
*/
//

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
