import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsdDataService } from './productsd-data.service';
import { MenuComponent } from './menu/menu.component';
import { PriceUpdaterComponent } from './price-updater/price-updater.component';
import { NameHeaderComponent } from './name-header/name-header.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterComponent } from './register/register.component';
import { GreetEmpComponent } from './greet-emp/greet-emp.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    InventoryComponent,
    MenuComponent,
    PriceUpdaterComponent,
    NameHeaderComponent,
    CartComponent,
    UserComponent,
    UserdetailsComponent,
    RegistrationComponent,
    RegisterComponent,
    GreetEmpComponent,
    SearchComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
