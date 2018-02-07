import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BsFooterComponent } from './components/bs-footer/bs-footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';






@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      {path:'', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'contact', component:ContactComponent},
      {path:'login', component:LoginComponent}
    ])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    AboutComponent,
    BsFooterComponent,
    ContactComponent,
    LoginComponent
  ],
  exports : [
    BsNavbarComponent
  ],
  providers: [
    
  ]
})
export class CoreModule { }
