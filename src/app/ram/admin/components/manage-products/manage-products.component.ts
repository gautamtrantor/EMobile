import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit, OnDestroy {
  products:Product[];
  filterProducts:any[];
  subscription:Subscription

  constructor(private _productService: ProductService) { }

  ngOnInit() {
   this.subscription =  this._productService.getAll().subscribe(products => {
      this.filterProducts = this.products = products;
    });
  }
  filter(query){
    console.log(query);
    this.filterProducts = (query) ?
       this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
       this.products;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
