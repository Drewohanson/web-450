/*
=====================================
  ; Title: presentation.service.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: presentation.service.ts
======================================
*/

 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

 @Injectable({
     providedIn: 'root'
 })
 export class PresentationService {

     presentationName: string;
     presentations: any;
     images: any;

 constructor(private http: HttpClient) {

   }

   getPresentations() {
     return this.http.get('./assets/presentation.json');
   }
 }
