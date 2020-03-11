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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DynamicListComponent } from './components/dynamic-list/dynamic-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { DateCardComponent } from './components/date-card/date-card.component';
import { DynamicCardComponent } from './components/dynamic-card/dynamic-card.component';
import { DynamicNavbarComponent } from './components/dynamic-navbar/dynamic-navbar.component';
import { DynamicCarouselComponent } from './components/dynamic-carousel/dynamic-carousel.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LinkCardComponent } from './components/link-card/link-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductcardComponent,
    FooterComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    DynamicListComponent,
    ProductDetailComponent,
    DisplayProductsComponent,
    DateCardComponent,
    DynamicCardComponent,
    DynamicNavbarComponent,
    DynamicCarouselComponent,
    LinkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
