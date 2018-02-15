import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../admin/service/auth.service';
import { OrderService } from '../../services/order.service';
import { Order } from '../../../shared/models/order';
import { Input } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit, OnDestroy {
  shipping = {};
  userSubscription:Subscription;
  userId:string;
  @Input('cart') cart:ShoppingCart;
  

  constructor(
    private router: Router,
    private orderService:OrderService,
    private authService:AuthService) { }

  ngOnInit() {
     this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  async placeOrder(){
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

}
