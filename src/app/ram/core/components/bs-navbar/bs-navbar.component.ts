import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../admin/service/auth.service';
import { AppUser } from '../../../shared/models/app.user';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser:AppUser

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe( appuser => this.appUser = appuser)
   }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
