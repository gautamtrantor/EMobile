import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import {ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AdminAuthGuartService } from './service/admin-auth-guart.service';
import { ProductFormComponent } from './components/product-form/product-form.component';







@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path:'my/orders', 
        component:MyOrdersComponent, 
        canActivate:[AuthGuardService] 
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
        path:'admin/products', 
        component:ManageProductsComponent,
        canActivate:[AuthGuardService, AdminAuthGuartService] 
      }
    ])
  ],
  declarations: [
    MyOrdersComponent, 
    ManageOrdersComponent, 
    ManageProductsComponent, ProductFormComponent
  ],
  providers: [
    AuthService, // for login logout service
    AuthGuardService, // for login auth service 
    AdminAuthGuartService // for admin user only
  ]
})
export class AdminModule { }
