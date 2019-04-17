import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(private questionService: QuestionService, private router: Router) { }

  questionJSON: JSON;
  arrCase = [1,2,3,4];
  Questions : object [];
  Answers :  string[] ;

  ngOnInit() {
    this.questionJSON = this.questionService.getJSON();
    //console.log(this.questionJSON["Questions"]);
  }

}

