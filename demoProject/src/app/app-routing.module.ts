import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'productlist',
    component:ProductListComponent
  },
  {
    path:'inventory',
    component:InventoryComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'user',
    component:UserComponent,
    children:[{
      path:'userdetails/:id',
      component:UserdetailsComponent
    }]
  },
  {
    path:'registration',
    component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
