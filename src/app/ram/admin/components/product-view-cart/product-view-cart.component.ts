import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'product-view-cart',
  templateUrl: './product-view-cart.component.html',
  styleUrls: ['./product-view-cart.component.css']
})
export class ProductViewCartComponent implements OnInit {
  @Input('user-data') UserData:any;
  @Input('order-id') OrderId:string;
  @Input('user-id') UserId:boolean = false;

  userId:string;
  productData:any;
  

  constructor() { }

  ngOnInit() {
    //console.log(this.UserData);
    this.userId = this.UserData[3].$value;
  }

}
