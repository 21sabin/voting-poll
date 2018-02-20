import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { VotingIndexComponent } from './voting-index/voting-index.component';
import { AdminComponent } from './admin/admin.component';
import {LoginComponent} from './admin/login/login.component';
import {routing} from './app.routes';
import {VotingPlaceComponent} from './admin/voting-place/voting-place.component'


@NgModule({
  declarations: [
    AppComponent,
    VotingIndexComponent,
    AdminComponent,
    LoginComponent,
    VotingPlaceComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
