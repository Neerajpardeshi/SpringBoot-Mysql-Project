import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsdDataService {
  productList: Array<Product>;
  constructor() 
  { 
    console.log("ProductsDataService invoked")
    this.productList=new Array<Product>()
    let p1=new Product(1,"Watch","Accesories",10000)
    let p2=new Product(2,"Shirt","Clothing",1000)
    let p3=new Product(3,"Shoes","Footwear",2000)
    let p4=new Product(4,"Deodrant","Accesories",500)
    this.productList.push(p1)
    this.productList.push(p2)
    this.productList.push(p3)
    this.productList.push(p4)
  }


  getProductList(){
    return this.productList
  }
}
