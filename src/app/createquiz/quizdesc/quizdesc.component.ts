import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quiz } from 'src/app/model/Quiz';
import { QuizService } from 'src/app/services/quizdetails.service';

@Component({
  selector: 'app-quizdesc',
  templateUrl: './quizdesc.component.html',
  styleUrls: ['./quizdesc.component.scss']
})
export class QuizdescComponent implements OnInit {

Name:string;
Description:string;
NumberOfQuestion:number;
StartDate:Date;
EndDate:Date;

public quiz : Quiz= {} as Quiz


public addquestions()
{

}  
  constructor(private quizService : QuizService) { }

  ngOnInit() {
    this.today = new Date(this.today);
    console.log(this.today);
  }
  today:Date;

  onSubmit(quizDescForm) {
    console.log(quizDescForm.value);
    
    this.quiz.name = quizDescForm.value.title;
    this.quiz.description = quizDescForm.value.description;
    
    this.quiz.numberOfQuestion = quizDescForm.value.noofqstn;
    this.quiz.createdBy = localStorage.getItem("name");
    this.quiz.startDate = quizDescForm.value.startdate;
    this.quiz.endDate = quizDescForm.value.enddate; 
    if(this.quiz.startDate >= this.today)
    alert("Start date should be greater than current");

    if(!(this.quiz.startDate < this.quiz.endDate))
    alert("End date should be greater than start date");
    console.log(this.quiz);
    this.quizService.PostQuizDetails(this.quiz).subscribe((res)=>console.log("res"));

  } 

}
