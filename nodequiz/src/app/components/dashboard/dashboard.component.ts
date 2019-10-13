/*
=====================================
  ; Title: dashboard.component.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: nodequiz
======================================
*/

import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quizzes: any[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizzes = this.quizService.getQuizzes();
  }



}
