import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.googleLogin().then(responce =>{
      this.router.navigate([`dashboard`]);
    },
    error =>{ 
      console.log(error);
    })
  }

}
