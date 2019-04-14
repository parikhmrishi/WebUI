import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  form: FormGroup;
  Qtype: boolean = true;
  loadComponent: boolean

  ngOnInit() {
    this.form = this.fb.group({
      'Questions': this.fb.array([
        this.initX()
      ])
    });
    console.log(this.form.value);

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
      'isCorrect': ['']

    })
  }


  addQuestion() {
    const control = <FormArray>this.form.controls['Questions'];
    control.push(this.initX());
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
  }


  proceedtopreview() {

    this.loadComponent = true;

  }

  constructor(private fb: FormBuilder) {

  }

}