import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  quiz: any;
  urlParamId: string;
  errorMessage: string;


  constructor(private route: ActivatedRoute, private http: HttpClient) {


    this.urlParamId = route.snapshot.paramMap.get('quizId');;

    this.http.get('/api/quizzes/'+this.urlParamId).subscribe(res => {
      if (res) {
        return this.quiz = res;
      } else {
        return this.errorMessage = "Quiz not found";
      }

    })

  }



  ngOnInit() {

  }

}
