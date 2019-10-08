/*
=====================================
  ; Title: base-layout.component.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: base-layout.component.ts
======================================
*/

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-base-layout",
  templateUrl: "./base-layout.component.html",
  styleUrls: ["./base-layout.component.css"]
})
export class BaseLayoutComponent implements OnInit {

  constructor( private router: Router) { }
  ngOnInit() {

  }
logout(){
    console.log("inside logout()!!!!");
        this.router.navigate(['/session/login']);
  }
}



