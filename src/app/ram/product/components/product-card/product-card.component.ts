import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart')shoppingCart;

  constructor(
    private shoppingCartService:ShoppingCartService
  ) { }

  ngOnInit() {
  }

  addToCart(){
    this.shoppingCartService.addToCart(this.product);
    console.log(this.product)
  }
  removeToCart(){
    this.shoppingCartService.removeFromCart(this.product);
  }
  getQuanity(){
    //console.log('this.shoppingCart', this.shoppingCart);
    if(!this.shoppingCart) return 0;
  //  if(!this.shoppingCart) return 0;
   // console.log('this.shoppingCart--', this.shoppingCart);
   // console.log('this.product.$key', this.product.$key)
    let item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }

}
