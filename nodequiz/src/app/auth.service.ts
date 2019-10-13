/*
=====================================
  ; Title: auth.service.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: nodequiz
======================================
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = 'http://localhost:3000/api/login'
  private quizUrl = 'http://localhost:3000/api/quiz/'

  constructor(private http: HttpClient, private router : Router) { }

  login(user) {

    return this.http.post<any>(this.loginUrl, user)
  }

  getQuiz(quizId) {
    return this.http.get<any>(this.quizUrl + quizId);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

}
