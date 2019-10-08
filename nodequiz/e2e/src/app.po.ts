/*
=====================================
  ; Title: app.po.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: app.po.ts
======================================
*/


import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
