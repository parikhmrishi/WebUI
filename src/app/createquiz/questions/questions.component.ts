import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  form: FormGroup;
  Qtype:boolean=true;
  loadComponent:boolean

  ngOnInit() {
    this.form = this.fb.group({
      'Questions': this.fb.array([
        this.initX()
      ])
    });
    console.log(this.form.value);
    // selectChange(event:any)
    // {
    //   if(event.target.value === "mcq")
    //   this.Qtype= true;
    //   this.Qtype= false;
    // }
    // this.form.valueChanges.subscribe(data => this.validateForm());
    // this.validateForm();
    //valid
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
      
    })
  }


  addX() {
    const control = <FormArray>this.form.controls['Questions'];
    control.push(this.initX());
  }


  addY(ix) {
    const control = (<FormArray>this.form.controls['Questions']).at(ix).get('Options') as FormArray;
    control.push(this.initY());
  }

  RemoveY(ix)
  {
    const control = (<FormArray>this.form.controls['Questions']).at(ix).get('Options') as FormArray;
    var optionLength = control.length;
    console.log(optionLength);
    control.removeAt(optionLength-1);
  }

  RemoveX(ix)
  {
    const control = <FormArray>this.form.controls['Questions'];
     control.removeAt(ix);
  }


  proceedtopreview()
  {
    
    this.loadComponent = true;

  }

  constructor(private fb: FormBuilder) {

  }

}
