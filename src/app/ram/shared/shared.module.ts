import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { UserService } from './service/user.service';
import { CagegoryService } from './service/cagegory.service';
import { ProductService } from './service/product.service';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductQuantityComponent],
  providers:[
    UserService,
    CagegoryService, // for cagegory data all
    ProductService // for all products service code here 
  ],
  exports: [
    ProductQuantityComponent
  ]
})
export class SharedModule { }
