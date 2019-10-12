/*
=====================================
  ; Title: presentation.component.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: presentation.component.ts
======================================
*/

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentationService } from './presentation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})

export class PresentationComponent implements OnInit {


  constructor() { }

 // presentation;
  //APIPresentation;
  //RESTfulPresentation;


  //constructor(private router: Router) {
    //this.presentation = [
      //{ slide: 'assets/presentation/1.0.jpg' },
      //{ slide: 'assets/presentation/1.1.jpg' },
//      { slide: 'assets/presentation/1.2.jpg' },
  //    { slide: 'assets/presentation/1.3.jpg' },
    //  { slide: 'assets/presentation/1.4.jpg' },
     // { slide: 'assets/presentation/1.5.jpg' },
//      { slide: 'assets/presentation/1.6.jpg' },
  //    { slide: 'assets/presentation/1.7.jpg' },
    //  { slide: 'assets/presentation/1.8.jpg' },
//      { slide: 'assets/presentation/1.9.jpg' },
  //    { slide: 'assets/presentation/1.10.jpg' },

 // ],

   // this.APIPresentation = [
     // { slide: 'assets/presentation/2.0.jpg' },
//      { slide: 'assets/presentation/2.1.jpg' },
  //    { slide: 'assets/presentation/2.2.jpg' },
    //  { slide: 'assets/presentation/2.3.jpg' },
 //     { slide: 'assets/presentation/2.4.jpg' },
   //   { slide: 'assets/presentation/2.5.jpg' },
     // { slide: 'assets/presentation/2.6.jpg' },
//      { slide: 'assets/presentation/2.7.jpg' },
  //    { slide: 'assets/presentation/2.8.jpg' },
    //  { slide: 'assets/presentation/2.9.jpg' },
      //{ slide: 'assets/presentation/2.10.jpg' },
//      { slide: 'assets/presentation/2.11.jpg' }
 // ],

  //this.RESTfulPresentation = [
   // { slide: 'assets/presentation/3.0.jpg' },
     // { slide: 'assets/presentation/3.1.jpg' },
     // { slide: 'assets/presentation/3.2.jpg' },
      //{ slide: 'assets/presentation/3.3.jpg' },
      //{ slide: 'assets/presentation/3.4.jpg' },
    //  { slide: 'assets/presentation/3.5.jpg' },
 //     { slide: 'assets/presentation/3.6.jpg' },
   //   { slide: 'assets/presentation/3.7.jpg' },
     // { slide: 'assets/presentation/3.8.jpg' },
 //     { slide: 'assets/presentation/3.9.jpg' },
   //   { slide: 'assets/presentation/3.10.jpg' },
     // { slide: 'assets/presentation/3.11.jpg' }

 // ]

  // }



  ngOnInit() {

  }

}
