import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products:any[] = [];
  filterProducts:Product[] = [];
  cart:any;
  subscription:Subscription;

  _category:string;

  constructor(
    route:ActivatedRoute,
    private productService:ProductService,
    private shoopingCartService :ShoppingCartService
  ) { 
      productService.getAll()
        .switchMap(products => {
          this.products = products;
          return route.queryParamMap;
        })
        .subscribe(params => {
          this._category = params.get('category');

          this.filterProducts = (this._category) ? 
            this.products.filter(p => p.category === this._category) : 
            this.products;
        })
  }

  async ngOnInit() {
    this.subscription = (await this.shoopingCartService.getCart())
        .subscribe(cart => {
      this.cart = cart;
      //console.log('this.cart', this.cart);
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
