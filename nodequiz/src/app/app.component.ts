/*
=====================================
  ; Title: app.component.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: app.component.ts
======================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Node Quiz';
}
