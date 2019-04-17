import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { QuestionService } from '../../services/question.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  form: FormGroup;
  Qtype: boolean = true;
  loadComponent: boolean;
  questionCount: number = 1;
  test = true;

  ngOnInit() {
    this.form = this.fb.group({
      'Questions': this.fb.array([
        this.initX()
      ])
    });

  }

  public onChange(event): void {
    const questionType = event.target.value;
    if (questionType == "MCQ") {
      this.Qtype = true;
    }
    else {
      this.Qtype = false;
    }
  }

  OnCheck(e,questionindex) {
    console.log(e);
    
    const control = (<FormArray>this.form.controls['Questions']).at(questionindex).get('Options') as FormArray;
    
  }

  initX() {
    return this.fb.group({
      //  ---------------------forms fields on x level ------------------------
      'Question': [''],
      // ---------------------------------------------------------------------
      'Options': this.fb.array([
        this.initY()
      ])
    });
    
  }

  initY() {
    return this.fb.group({
      'Option': [''],
      'isCorrect': [''],
    })
  }


  addQuestion() {
    const control = <FormArray>this.form.controls['Questions'];
    control.push(this.initX());
    this.questionCount++;
    console.log(this.questionCount);
  }


  addOption(questionindex) {
    const control = (<FormArray>this.form.controls['Questions']).at(questionindex).get('Options') as FormArray;
    control.push(this.initY());
  }

  RemoveOption(questionindex) {
    const control = (<FormArray>this.form.controls['Questions']).at(questionindex).get('Options') as FormArray;
    var optionLength = control.length;
    console.log(optionLength);
    control.removeAt(optionLength - 1);
  }

  RemoveQuestion(questionindex) {
    const control = <FormArray>this.form.controls['Questions'];
    control.removeAt(questionindex);
    this.questionCount--;
    console.log(this.questionCount);
    
  }

  preview(form: any) {
    this.questionService.questionAnswerJson(JSON.stringify(form));
    this.router.navigate(['/createquiz/preview']);
  }


  proceedtopreview() {

    this.loadComponent = true;

  }

  constructor(private fb: FormBuilder, private questionService: QuestionService, private router : Router) {

  }

}