/*
=====================================
  ; Title: quiz-selection.component.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description:quiz.selection.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {


  presentationName: string;

  constructor(private router: Router, private cookie: CookieService) { }

  goToPresentation(presentationName) {
    this.presentationName = presentationName;
    console.log('The presentation name is ' + this.presentationName);
    this.router.navigate(['/presentation/' + this.presentationName]);
  }
  ngOnInit() {
  }
}
