/*
=====================================
  ; Title: base-layouts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: nodequiz
======================================
*/


import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }


  ngOnInit() {
  }

  logout(){
    console.log("inside logout()!!!!");
    this.cookieService.delete('isAuthenticated');
    this.router.navigate(['/session/login']);
  }



}
