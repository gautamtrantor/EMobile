import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { FiterProductsComponent } from './components/fiter-products/fiter-products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent}
    ])
  ],
  declarations: [
    ShoppingCartComponent,
    ProductsComponent,
    FiterProductsComponent,
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ],
  providers:[
    ShoppingCartService
  ]
})
export class ProductsModule { }
