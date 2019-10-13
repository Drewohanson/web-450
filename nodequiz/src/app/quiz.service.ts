/*
=====================================
  ; Title: quiz.service.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: nodequiz
======================================
*/
import { Injectable } from '@angular/core';

// import { HttpCleint } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  quizData = [
    {
      id: '1001',
      title: '2 Pizza Rule',
      description: "Learn the basics of the 2 pizza rule.",
      images: [
        {
          image: '1.0.jpg'
        }
      ]
    },
    {
      id: '1002',
      title: "API",
      description: "Learn the fundamentals of API, and why it might be a smart choice for you."
    },

    {
      id: '1003',
      title: 'REST',
      description: "Learn about RESTful APIs "
    }
  ];


  getQuizzes() {
    return this.quizData
  }

}
