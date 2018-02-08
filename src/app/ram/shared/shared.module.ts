import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import { CagegoryService } from './service/cagegory.service';
import { ProductService } from './service/product.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    UserService,
    CagegoryService, // for cagegory data all
    ProductService // for all products service code here 
  ]
})
export class SharedModule { }
