import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { DataService } from '../services/userData.service';
import { IUserDetails } from '../model/IUserDetail'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  response: string;
  id:string;
  name:string;
  email:string;

  public isvalid:boolean=false;
  public iscreate:boolean=false;
  public displaysidemenu(valid)
  {
    if(this.isvalid==true)
      this.isvalid=false;
    else if(this.isvalid==false)
      this.isvalid=true;
  }
  public createquiz()
  {
    this.router.navigate(['/createquiz']);
  }
 

  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { 
    
  }

  ngOnInit() {
    if (localStorage.getItem("userId") === null) {
      this.router.navigate(['auth']);
    }
    else {
      this.router.navigate(['home']);
    }

    this.dataService.getUser().subscribe((data) => {
      console.log(data);
    });

    this.id = localStorage.getItem("id");
    this.name = localStorage.getItem("name");
    this.email = localStorage.getItem("email");

  }

  signOut() {
    this.authService.signOut().then(() => {
      localStorage.removeItem("userId");
      this.router.navigate(['auth']);
    });
    
  }

}

