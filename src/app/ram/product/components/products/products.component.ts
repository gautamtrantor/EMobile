import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[] = [];
  filterProducts:Product[] = [];

  _category:string;

  constructor(
    route:ActivatedRoute,
    private productService:ProductService
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

  ngOnInit() {
  }

}
