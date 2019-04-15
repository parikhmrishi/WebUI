import { Component, OnInit } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';
import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  questionJSON: any;

  ngOnInit() {
    this.questionJSON = this.questionService.getJSON();
  }

}
