/*
=====================================
  ; Title: presentation.component.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: presentation.component.ts
======================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  presentationId: number;
  presentation: Array<any> = [];

  pizzarule: Array<any> = [];
  api: Array<any> = [];
  rest: Array<any> = [];

  constructor(private activeRoute: ActivatedRoute, ) {

    this.pizzarule = [
      { name: './assets/presentation/1001/1.0.jpg' }, { name: './assets/presentation/1001/1.1.jpg' }, { name: './assets/presentation/1001/1.2.jpg' }, { name: './assets/presentation/1001/1.3.jpg' }, { name: './assets/presentation/1001/1.4.jpg' }, { name: './assets/presentation/1001/1.5.jpg' }, { name: './assets/presentation/1001/1.6.jpg' }, { name: './assets/presentation/1001/1.7/jpg' }, { name: './assets/presentation/1001/1.8.jpg' }, { name: './assets/presentation/1001/1.9.jpg' }, { name: './assets/presentation/1001/1.10.jpg' }, ]

      this.api = [
        { name: './assets/presentation/1002/2.0.jpg' }, { name: './assets/presentation/1002/2.1.jpg' }, { name: './assets/presentation/1002/2.2.jpg' }, { name: './assets/presentation/1002/2.3.jpg' }, { name: './assets/presentation/1002/2.4.jpg' }, { name: './assets/presentation/1002/2.5.jpg' }, { name: './assets/presentation/1002/2.6.jpg' }, { name: './assets/presentation/1002/2.7/jpg' }, { name: './assets/presentation/1002/2.8.jpg' }, { name: './assets/presentation/1002/2.9.jpg' }, { name: './assets/presentation/1002/2.10.jpg' }, { name: './assets/presentation/1002/2.11.jpg' }, ]

      this.rest= [
        { name: './assets/presentation/1003/3.0.jpg' }, { name: './assets/presentation/1003/3.1.jpg' }, { name: './assets/presentation/1003/3.2.jpg' }, { name: './assets/presentation/1003/3.3.jpg' }, { name: './assets/presentation/1003/3.4.jpg' }, { name: './assets/presentation/1003/3.5.jpg' }, { name: './assets/presentation/1003/3.6.jpg' }, { name: './assets/presentation/1003/3.7/jpg' }, { name: './assets/presentation/1003/3.8.jpg' }, { name: './assets/presentation/1003/3.9.jpg' }, { name: './assets/presentation/1003/3.10.jpg' }, { name: './assets/presentation/1003/3.11.jpg' }, ]

    this.presentationId = parseInt(this.activeRoute.snapshot.paramMap.get('id'))

  }

  newArray() {
    console.log(this.presentationId)
    if(this.presentationId === 1001) {
      this.presentation = [...this.pizzarule]
    } if(this.presentationId === 1002) {
      this.presentation = [...this.api]
    } if(this.presentationId === 1003) {
      this.presentation = [...this.rest]
      console.log(this.presentation);

    } else {
      return;
    }
  }



  ngOnInit() {
    this.newArray()
  }
}
