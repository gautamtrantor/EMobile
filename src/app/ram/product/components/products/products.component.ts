import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[] = [];
  filterProducts:Product[] = [];
  cart$:Observable<ShoppingCart>;


  _category:string;

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private shoopingCartService :ShoppingCartService
  ) { }

  async ngOnInit() {
    this.cart$ = await this.shoopingCartService.getCart();
    this.populateProducts();
  }
  private populateProducts(){
    this.productService.getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this._category = params.get('category');
        this.applyFilter();
      })
  }
  private applyFilter(){
    this.filterProducts = (this._category) ? 
    this.products.filter(p => p.category === this._category) : 
    this.products;
  }

}
