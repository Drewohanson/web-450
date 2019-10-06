import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-root",
  templateUrl: "./presentation.component.html",
  styleUrls: ["./presentation.component.css"]
})
export class PresentationComponent implements OnInit {
  presentation: number;
  selection: string;
  presentationName: string;
  presentationSlides = [
    {name: 'Slide 1', image: '1.0.jpg'},
    {name: 'Slide 2', image: '1.1.jpg'},
    {name: 'Slide 3', image: '1.2.jpg'},
    {name: 'Slide 4', image: '1.3.jpg'},
    {name: 'Slide 5', image: '1.4.jpg'},
    {name: 'Slide 6', image: '1.5.jpg'},
    {name: 'Slide 7', image: '1.6.jpg'},
    {name: 'Slide 8', image: '1.7.jpg'},
    {name: 'Slide 9', image: '1.8.jpg'},
    {name: 'Slide 10', image: '1.9.jpg'},
    {name: 'Slide 11', image: '1.10.jpg'},
    {name: 'Slide 1', image: '2.0.jpg'},
    {name: 'Slide 2', image: '2.1.jpg'},
    {name: 'Slide 3', image: '2.2.jpg'},
    {name: 'Slide 4', image: '2.3.jpg'},
    {name: 'Slide 5', image: '2.4.jpg'},
    {name: 'Slide 6', image: '2.5.jpg'},
    {name: 'Slide 7', image: '2.6.jpg'},
    {name: 'Slide 8', image: '2.7.jpg'},
    {name: 'Slide 9', image: '2.8.jpg'},
    {name: 'Slide 10', image: '2.9.jpg'},
    {name: 'Slide 11', image: '2.10.jpg'},
    {name: 'Slide 12', image: '2.11.jpg'},
    {name: 'Slide 1', image: '3.0.jpg'},
    {name: 'Slide 2', image: '3.1.jpg'},
    {name: 'Slide 3', image: '3.2.jpg'},
    {name: 'Slide 4', image: '3.3.jpg'},
    {name: 'Slide 5', image: '3.4.jpg'},
    {name: 'Slide 6', image: '3.5.jpg'},
    {name: 'Slide 7', image: '3.6.jpg'},
    {name: 'Slide 8', image: '3.7.jpg'},
    {name: 'Slide 9', image: '3.8.jpg'},
    {name: 'Slide 10', image: '3.9.jpg'},
    {name: 'Slide 11', image: '3.10.jpg'},
    {name: 'Slide 12', image: '3.11.jpg'},
      ]

  constructor(private route: ActivatedRoute) {
    this.presentation = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    if (this.presentation === 1) {
      this.selection = "nodeQuiz-hanson-2.2-presentation";
      this.presentationName = "2 Pizza Team Rule"
    } else if (this.presentation === 2) {
      this.selection = "nodeQuiz-API-Design-presentation";
      this.presentationName = "API";
    } else {
      this.selection = "nodeQuiz-RESTful APIs-presentation";
      this.presentationName = "RESTful";
    }
  }
  ngOnInit() {}
}
