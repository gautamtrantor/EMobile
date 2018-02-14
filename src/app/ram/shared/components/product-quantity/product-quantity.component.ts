import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../../product/services/shopping-cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product:Product;
  
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
 

}
