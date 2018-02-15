import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { FiterProductsComponent } from './components/fiter-products/fiter-products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { SharedModule } from '../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AuthGuardService } from '../admin/service/auth-guard.service';
import { OrderService } from './services/order.service';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingFormComponent } from './components/shopping-form/shopping-form.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {path:'', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      { 
        path:'check-out', 
        component:CheckOutComponent, 
        canActivate:[AuthGuardService] 
      },
      { 
        path:'order-success/:id', 
        component:OrderSuccessComponent, 
        canActivate:[AuthGuardService] 
      }
    ])
  ],
  declarations: [
    ShoppingCartComponent,
    ProductsComponent,
    FiterProductsComponent,
    ProductCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ShoppingCartSummaryComponent,
    ShoppingFormComponent
  ],
  exports: [
    ProductCardComponent
  ],
  providers:[
    ShoppingCartService,
    AuthGuardService,
    OrderService // order product api here writes
  ]
})
export class ProductsModule { }
