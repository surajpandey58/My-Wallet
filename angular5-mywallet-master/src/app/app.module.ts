import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, AddComponent, DebitCardComponent, CreditCardComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule, MatGridListModule, MatCardModule, MatDividerModule, MatIconModule, MatButtonModule,MatButtonToggleModule, MatListModule,MatToolbarModule,MatInputModule,MatDatepickerModule,MatFormFieldModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent,AddComponent,DebitCardComponent,CreditCardComponent]
})
export class AppModule { }
