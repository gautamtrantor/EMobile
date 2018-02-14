import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../admin/service/auth.service';
import { AppUser } from '../../../shared/models/app.user';
import { ShoppingCartService } from '../../../product/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../../../shared/models/shopping-cart';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser:AppUser;
  cart$:Observable<ShoppingCart>;

  constructor(
    private authService: AuthService,
    private shoppingCartService:ShoppingCartService) {
    
   }

  async ngOnInit() {
    this.authService.appUser$.subscribe( appuser => this.appUser = appuser);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout(){
    this.authService.logout();
  }

}
