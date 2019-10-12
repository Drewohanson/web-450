/*
; ============================================
; Title:  quiz.service.ts
; Author: Drew Hanson
; Date:    12 Oct 2019
; Description: NodeQuiz
;=============================================
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

quizName: string;

  constructor(private http: HttpClient) { }

  getQuizzes() {
    console.log('Running getQuizzes from Service');
    return this.http.get('/assets/questions.json');
  }

}
