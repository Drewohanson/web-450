import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    quizName: string;
    employeeId: number;
    quizId: number;
    quizResults: any;
    quizzes: any;
    questions: string;
    answers: string;

  constructor(private http: HttpClient, private router: Router) {
  this.quizzes = [
    { id: 101, name: "2pizzarule" },
    { id: 102, name: "API" },
    { id: 103, name: "RESTfulAPIs" }
  ]
}

  getQuizzes() {
    return this.http.get('./assets/questions.json');
  }

  onSubmit(form){
    this.quizResults = form;
    this.quizResults['employeeId'] = this.employeeId; // add the employeeId to the quizResults ojbect
  }

  /*
  user : string;
  goToResults(employeeId) {
    this.user = employeeId;
    console.log('user');
    console.log('Score: ' + this.user);
    this.router.navigate(['/dashboard/questions/' + this.user]);
  }*/

}
