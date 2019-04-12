import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.scss']
})
export class CreatequizComponent implements OnInit {
  public qstn:boolean=false;
  public quizdescshow:boolean = true;
  public questionshow:boolean=false;
  public previewshow:boolean=false;
  public quizdesc()
  {
      this.quizdescshow=true;
      this.questionshow=false;
      this.previewshow=false;
  }
  public questions()
  {

    this.quizdescshow=false;
    this.questionshow=true;
    this.previewshow=false;
  }
  public preview()
  {
    this.quizdescshow=false;
    this.questionshow=false;
    this.previewshow=true;
  }


  constructor() { }

  ngOnInit() {
  }

  

}
