/*
; ============================================
; Title:  quiz.component.ts
; Author: Drew Hanson
; Date:    12 Oct 2019
; Description: NodeQuiz
;=============================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: number;
  quiz: any;
  quizQuestions: any = [];
  q: any = [];
  a: any = [];
  employeeId: any;
  summaryScore: any = {};
  public newQuizResults: any = {};

  constructor(private dialog: MatDialog, private activeRoute: ActivatedRoute, private auth: AuthService, private http: HttpClient, private router: Router ) {

    this.quizId = parseInt(this.activeRoute.snapshot.paramMap.get('id'))

    this.auth.getQuiz(this.quizId).subscribe(
      res => {
        this.quiz = res;

        this.test()

      },
      err => console.log(err)
    )

  }

  test() {
    for(let i = 0; i < this.quiz.quiz.questions.length; i++){
      this.quizQuestions.push(this.quiz.quiz.questions[i])
    }
  }

  onSubmit(form) {

    event.preventDefault();

    let quizResults: any;
    let score = 0;
    quizResults = form;


    let data = JSON.stringify(quizResults);



    let newData = data.split(/[{};:"",]+/, 75)

    console.log(newData)

    loop();

    function loop(){
      for(let i = 0; i < newData.length; i++) {
        if( newData[i] ==  "true") {
          score += 10

      }
    }
    return score
  }

  console.log(score)

    this.newQuizResults['employeeId'] = this.employeeId;
    this.newQuizResults['quizId'] = this.quizId;
    this.newQuizResults['score'] = score;
    this.summaryScore['score']= score;
    console.log(this.summaryScore)
    this.newQuizResults['quizName'] = this.quiz.quiz.quiz_name;

    localStorage.setItem("score", JSON.stringify(score)),


    console.log(this.newQuizResults)

    this.auth.postQuiz(this.newQuizResults).subscribe( res => {
      if(res){
        console.log(res)
      }
    })

    this.openDialog();
}

openDialog() {
  let dialogRef = this.dialog.open(SummaryComponent,

    )

  dialogRef.afterClosed().subscribe( res => {
    console.log('dialog closed');
  })
}

  getUser() {
    this.employeeId = localStorage.getItem('user');
    console.log(this.employeeId);
  }

  ngOnInit() {
    this.getUser()
  }

}
