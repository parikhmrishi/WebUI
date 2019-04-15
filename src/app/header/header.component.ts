import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  public sidemenu:boolean=false;
  public displaysidemenu(){
    if(this.sidemenu==false)
    {
      this.sidemenu=true;
    }
    else if(this.sidemenu==true)
    {
      this.sidemenu=false;
    }
  }
  public createquiz()
  {
    this.router.navigate(['/createquiz/quiz']);
  }

  ngOnInit() {
  }

}
