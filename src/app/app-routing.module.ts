import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { DynamicCardComponent } from './components/dynamic-card/dynamic-card.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'product-detail', component: ProductDetailComponent},
  { path: 'products', component: DisplayProductsComponent},
  { path: 'dynamic-card', component: DynamicCardComponent},
  { path: 'add-cart', component: AddCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
