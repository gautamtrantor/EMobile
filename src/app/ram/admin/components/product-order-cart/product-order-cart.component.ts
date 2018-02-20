import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'product-order-cart',
  templateUrl: './product-order-cart.component.html',
  styleUrls: ['./product-order-cart.component.css']
})
export class ProductOrderCartComponent implements OnInit {
  @Input('product-detail') productDetails:any[];
  @Input('total-price') totalPrice:number;

  constructor() { }

  ngOnInit() {
    
  }

}
