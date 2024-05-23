import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HeaderComponent } from './header/header.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { HomeComponent } from './home/home.component';
import { Route,RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { LaptopService } from './laptop.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './Auth/auth.guard';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AuthadminGuard } from './Auth/authadmin.guard';
import { UserorderdetailsComponent } from './userorderdetails/userorderdetails.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';



const routes:Routes=[
  {
      path:'',component:HomeComponent
  },
  {
      path:'home',component:HomeComponent
  },
  {
      path:'userlogin',component:UserloginComponent
  },
  {
      path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'addtocart',component:AddtocartComponent
  },
  {
      path:'register',component:RegisterComponent
  },
  {
      path:'products',component:ProductsComponent,canActivate:[AuthGuard]
  },
  {
      path:'cartitems',component:CartitemsComponent
  },
  {
      path:'updateproducts',component:UpdateproductsComponent,canActivate:[AuthadminGuard]
  },
  {
      path:'orderdetails',component:OrderdetailsComponent
  },
  {
    path:'userorderdetails',component:UserorderdetailsComponent
  },
  {
    path:'userdetails',component:UserdetailsComponent
  }
 
]


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    HeaderComponent,
    AdminloginComponent,
    RegisterComponent,
    ProductsComponent,
    UpdateproductsComponent,
    HomeComponent,
    AddtocartComponent,
    OrderdetailsComponent,
    UserorderdetailsComponent,
    CartitemsComponent,
    UserdetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [LaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
