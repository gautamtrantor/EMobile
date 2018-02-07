import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../../shared/service/user.service';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';


@Injectable()
export class AdminAuthGuartService implements CanActivate {

  constructor(private userService:UserService, private authService:AuthService) { }
  
  canActivate(): Observable<boolean>{
    return this.authService.appUser$
    .map(appUser => appUser.isAdmin);

  }
}
