import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.scss']
})
export class CreatequizComponent implements OnInit {

  statusQuiz:boolean;
  statusQuestion:boolean;
  statusPreview:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
    if(this.router.url == "/createquiz/quiz")
    {
      this.statusQuiz = environment.statusQuiz;
    }
    if(this.router.url == "/createquiz/question")
    {
      this.statusQuestion = environment.statusQuestion;
    }
    if(this.router.url == "/createquiz/preview")
    {
      this.statusPreview = environment.statusPreview;
    }
  }



}
