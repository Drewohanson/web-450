import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {

  constructor(private router: Router,  private http: HttpClient) { }
  errorMessage: string;
  quizzes: any;

  ngOnInit() {

  this.http.get('/api/quiz/all').subscribe(res => {
    if (res) {
      return this.quizzes = res;
    } else {
      return this.errorMessage = " no quizzes were found!!!";
    }
  })

  }//end of ngOnInit

  presentationPage(id){
    this.router.navigateByUrl('/quiz-selection/presentation/' + id);
  }



}
