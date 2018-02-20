import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart')shoppingCart: ShoppingCart;

  constructor(
    private shoppingCartService:ShoppingCartService
  ) { }

  ngOnInit() {
  }

  addToCart(){
    this.shoppingCartService.addToCart(this.product);
    //console.log(this.product)
  }
  

}
