import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

    questionObject: JSON;

  constructor(private http: HttpClient) {

  }

  questionAnswerJson(questionObject:any) : void {
      this.questionObject = questionObject;
  }
  getJSON() {
      return this.questionObject;
  }

  POSTQuestionAnswer()
  {
    
  }

  
}