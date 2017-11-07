import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService) {
   }

  ngOnInit() {

  }

  signOut(){
    this.authService.signOut();
  }

}
