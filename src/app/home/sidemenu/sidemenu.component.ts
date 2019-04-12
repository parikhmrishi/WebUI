import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }
  signOut() {
    this.authService.signOut().then(() => {
      localStorage.removeItem("userId");
      this.router.navigate(['auth']);
    });
    
  }

  ngOnInit() {
  }

}
