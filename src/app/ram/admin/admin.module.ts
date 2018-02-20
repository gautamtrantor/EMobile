import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import {ReactiveFormsModule, FormsModule  } from '@angular/forms';

//import { DataTableModule } from 'angular-2-data-table';

import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AdminAuthGuartService } from './service/admin-auth-guart.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../product/products.module';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductViewCartComponent } from './components/product-view-cart/product-view-cart.component';
import { ProductOrderCartComponent } from './components/product-order-cart/product-order-cart.component';
import { AdminProductViewComponent } from './components/admin-product-view/admin-product-view.component';








@NgModule({
  imports: [
    SharedModule,
    ProductsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
   // DataTableModule,
    RouterModule.forChild([
      { 
        path:'my/orders/view/:id', 
        component:ProductViewComponent, 
        canActivate:[AuthGuardService] 
      },
      { 
        path:'my/orders', 
        component:MyOrdersComponent, 
        canActivate:[AuthGuardService] 
      },
      { 
        path:'admin/orders/view/:id', 
        component:AdminProductViewComponent,
        canActivate:[AuthGuardService, AdminAuthGuartService] 
      },
      { 
        path:'admin/orders', 
        component:ManageOrdersComponent,
        canActivate:[AuthGuardService, AdminAuthGuartService] 
      },
      
      { 
        path:'admin/products/new', 
        component:ProductFormComponent,
        canActivate:[AuthGuardService, AdminAuthGuartService] 
      },
      { 
        path:'admin/products/:id', 
        component:ProductFormComponent,
        canActivate:[AuthGuardService, AdminAuthGuartService] 
      },
      { 
        path:'admin/products', 
        component:ManageProductsComponent,
        canActivate:[AuthGuardService, AdminAuthGuartService] 
      }
    ])
  ],
  declarations: [
    MyOrdersComponent, 
    ManageOrdersComponent, 
    ManageProductsComponent, ProductFormComponent, ProductViewComponent, ProductViewCartComponent, ProductOrderCartComponent, AdminProductViewComponent
  ],
  providers: [
    AuthService, // for login logout service
    AuthGuardService, // for login auth service 
    AdminAuthGuartService // for admin user only
  ]
})
export class AdminModule { }
