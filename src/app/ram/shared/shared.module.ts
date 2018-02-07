import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    UserService
  ]
})
export class SharedModule { }
