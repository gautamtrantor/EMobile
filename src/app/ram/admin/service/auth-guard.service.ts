import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import  'rxjs/add/operator/map';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router:Router) { }

  canActivate(route, state:RouterStateSnapshot){
    return this.auth.user$.map(user => {
      console.log('user authguar service ', user);
      if(user) return true;

      this.router.navigate(['/login'], {queryParams:{returnUrl:state.url}});
      return false;
    })
  }

  

}
