import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import {ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AdminModule } from './ram/admin/admin.module';
import { environment } from '../environments/environment';
import { SharedModule } from './ram/shared/shared.module';
import { CoreModule } from './ram/core/core-module.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  //  FormsModule,
  //  ReactiveFormsModule,
    AdminModule,
    CoreModule,
    SharedModule,
    
    //NgbModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
