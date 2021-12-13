import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductsdDataService } from './productsd-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartDataServiceService {
  //here we will use productService to fetch data of that 
  //particular productId
  cartList: Array<Product>;
  /*id:number
  name:string | undefined
  category:String | undefined
  price:number | undefined*/
  //flag:number=0
  constructor(private pdataService:ProductsdDataService) {
    this.cartList=new Array<Product>()
   }
  setCartData(pid:number)
  {
    
    for(var i=0;i<this.pdataService.productList.length;i++)
    {
      if(this.pdataService.productList[i].id==pid)
      {
        /*this.id=this.pdataService.productList[i].id
        this.name=this.pdataService.productList[i].name
        this.category=this.pdataService.productList[i].category
        this.price=this.pdataService.productList[i].price*/

        let c1=new Product(this.pdataService.productList[i].id,this.pdataService.productList[i].name,this.pdataService.productList[i].category,this.pdataService.productList[i].price)

        //this.flag=1
        this.cartList.push(c1)
        alert("Added to cart successfully!!")
      }
    }
    /*if(this.flag==0)
    {
      //display out of stock
    }*/
  }
  getCartData()
  {
      return this.cartList
  }
}
