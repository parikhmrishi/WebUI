import { Component, OnInit } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';
import { QuestionService } from '../../services/question.service'
import { Router } from '@angular/router';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(private questionService: QuestionService, private router: Router) { }

  questionJSON: any;

  ngOnInit() {
    this.questionJSON = this.questionService.getJSON();
    console.log(this.questionJSON.Questions.Questions.Options.Option.value);
  }

}

