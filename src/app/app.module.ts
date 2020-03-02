import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DynamicListComponent } from './components/dynamic-list/dynamic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductcardComponent,
    FooterComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    DynamicListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
