import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';

import { Product } from '../../../shared/models/product';
//import { DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;
  //tableResource: DataTableResource<Product>;
  filteredProducts:any[]= [];
  items: Product[] = [];
  itemCount: number; 

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
      .subscribe(products => {
       this.filteredProducts = this.products = products;
        this.initializeTable(products);
      });
  }

  private initializeTable(products: Product[]) {
   // this.tableResource = new DataTableResource(products);
   // this.tableResource.query({ offset: 0 })
    //  .then(items => this.items = items);
  //  this.tableResource.count()
   //   .then(count => this.itemCount = count);
  }

  reloadItems(params) {
   // if (!this.tableResource) return;

   // this.tableResource.query(params)
   //   .then(items => this.items = items);    
  }

  filter(query: string) { 
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

   // this.initializeTable(filteredProducts);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
