import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { CartComponent } from './cart/cart.component';
import { GreetEmpComponent } from './greet-emp/greet-emp.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {
    path:"registerEmp",
    component:RegisterComponent
  },
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
  },
  {
    path:'allemps',
    component:GreetEmpComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'update',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
