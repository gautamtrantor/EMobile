import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../../admin/service/auth.service';
import { Order } from '../../../shared/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  shipping = {};
  cart:ShoppingCart;
  userId:string;
  subscription: Subscription;
  userSubscription:Subscription;

  constructor(
      private router: Router,
      private shoppingCartService: ShoppingCartService,
      private orderService:OrderService,
      private authService:AuthService) { }

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
     this.subscription =  cart$.subscribe(cart => this.cart = cart);
     this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
  async placeOrder(){
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
    // let order = {
    //   userId: this.userId,
    //   dateCreated: new Date().getTime(),
    //   shipping : this.shipping,
    //   items: this.cart.items.map(i =>{
    //     return {
    //       product:{
    //         title:i.title,
    //         imageUrl : i.imageUrl,
    //         price:i.price
    //       },
    //       quantity:i.quantity,
    //       totalPrice:i.totalPrice
    //     }
    //   })

    // }
    //console.log(order);
    
  }

}
