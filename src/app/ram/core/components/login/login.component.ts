import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../admin/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private authService: AuthService) { 
    
  }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }

}
