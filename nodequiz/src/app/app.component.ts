/*import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column" style="margin-top: 5%; margin-left: 10%; width: 60%;">
        <mat-card class="mat-elevation-z8">
            <mat-card-title>Quiz Slideshow</mat-card-title>
            <mat-card-content>
                <p-carousel [value]="nodeQuiz-slides" numVisible="1">
                    <ng-template style="text-align: center;" let-item pTemplate="item">
                        <br /><br />
                        <div fxLayout="column" fxLayoutAlign="center center">
                            <div fxFlex>
                                <img src="./assets/nodeQuiz/{{item.image}}">
                            </div>
                            <div fxFlex>
                                <p>{{item.name}}</p>
                            </div>
                        </div><br /><br />
                    </ng-template>
                </p-carousel>
            </mat-card-content>
        </mat-card>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Quiz SlideShows';
  nodeQuiz: any;

  constructor() {
    this.nodeQuiz = [
      {name: 'slide 1', image: '1.0.jpg'},
      {name: 'slide 2', image: '1.1.jpg'},
      {name: 'slide 3', image: '1.2.jpg'},
      {name: 'slide 4', image: '1.3.jpg'},
      {name: 'slide 5', image: '1.4.jpg'},
      {name: 'slide 6', image: '1.5.jpg'},
      {name: 'slide 7', image: '1.6.jpg'},
      {name: 'slide 8', image: '1.7.jpg'},
      {name: 'slide 9', image: '1.8.jpg'},
      {name: 'slide 10', image: '1.9.jpg'},
      {name: 'slide 11', image: '1.10.jpg'},
      {name: 'slide 1', image: '2.0.jpg'},
      {name: 'slide 2', image: '2.1.jpg'},
      {name: 'slide 3', image: '2.2.jpg'},
      {name: 'slide 4', image: '2.3.jpg'},
      {name: 'slide 5', image: '2.4.jpg'},
      {name: 'slide 6', image: '2.5.jpg'},
      {name: 'slide 7', image: '2.6.jpg'},
      {name: 'slide 8', image: '2.7.jpg'},
      {name: 'slide 9', image: '2.8.jpg'},
      {name: 'slide 10', image: '2.9.jpg'},
      {name: 'slide 11', image: '2.10.jpg'},
      {name: 'slide 12', image: '2.11.jpg'},
      {name: 'slide 1', image: '3.0.jpg'},
      {name: 'slide 2', image: '3.1.jpg'},
      {name: 'slide 3', image: '3.2.jpg'},
      {name: 'slide 4', image: '3.3.jpg'},
      {name: 'slide 5', image: '3.4.jpg'},
      {name: 'slide 6', image: '3.5.jpg'},
      {name: 'slide 7', image: '3.6.jpg'},
      {name: 'slide 8', image: '3.7.jpg'},
      {name: 'slide 9', image: '3.8.jpg'},
      {name: 'slide 10', image: '3.9.jpg'},
      {name: 'slide 11', image: '3.10.jpg'},
      {name: 'slide 12', image: '3.11.jpg'}

    ];
  }

  ngOnInit() {
  }


}
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Node Quiz';
}
