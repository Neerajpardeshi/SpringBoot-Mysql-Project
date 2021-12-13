import { Component, OnInit } from '@angular/core';
import { CartDataServiceService } from '../cart-data-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_product_list : Array<Product>
  constructor(private cdata:CartDataServiceService) { 
    //this.productList=this.pdataService.getProductList()
    this.cart_product_list=this.cdata.getCartData()
  }
    
  ngOnInit(): void {
  }

}
