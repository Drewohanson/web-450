/*
=====================================
  ; Title: presentation.component.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: presentation.component.ts
======================================
*/

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentationService } from './presentation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  images: any;
  presentation: any;
  presentationName: string;
  quizId: any;
  quizName: string;

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private presentationService: PresentationService, private router: Router,) {
                this.presentationName = route.snapshot.paramMap.get('id');
    this.presentationService.getPresentations()
    .subscribe(res => {
      this.presentation = res;
      console.log(this.presentation);
      this.images = this.presentation.filter(p => p.name === this.presentationName)[0].images;
      console.log(this.images);
    })
  }
  goToQuiz(quizId) {
    this.quizId = quizId;
    console.log('quizId');
    console.log('Quiz: ' + this.quizId);
    this.router.navigate(['/quiz/' + this.quizId]);
  }

  ngOnInit() {

  }

}
