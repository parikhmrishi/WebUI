import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { Router } from '@angular/router'
import { DataService } from '../services/userData.service';
import { IUserDetails } from '../model/IUserDetail'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private user: SocialUser;
  response: IUserDetails;
  constructor(private authService: AuthService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // console.log(DateTime)
    if (localStorage.getItem("userId") === null) {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.router.navigate(['auth']);
      });
    }
    else {
      this.router.navigate(['home']);
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      localStorage.clear();
      this.router.navigate(['home']);
      localStorage.setItem("userId", this.user.id);
      localStorage.setItem("name", this.user.name);
      if (this.user.id != undefined) {
        this.dataService.setUser(this.user.id, this.user.name, this.user.email);
      }
    });
  }
}

