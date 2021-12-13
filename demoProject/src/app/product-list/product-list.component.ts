import { Component, OnInit } from '@angular/core';
import { CartDataServiceService } from '../cart-data-service.service';
import { Product } from '../product'
import { ProductsdDataService } from '../productsd-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers:[{provide:ProductsdDataService,useClass:ProductsdDataService}]
})
export class ProductListComponent implements OnInit {
  productList: Array<Product>=[]
  isAdmin:boolean = true
  constructor(private pdataService:ProductsdDataService,private cartdata:CartDataServiceService) //Dependency Injection
  { 

    //instead of creating product data here we will inject it 
    //from service

    //let pdataService=new ProductsdDataService()

    //now defining dependencies inside component
    //constructor in not smart choice
    //use dependency injection 

    //service calls must be in ngOnInit
    //this.productList=pdataService.getProductList()
    
  }

  ngOnInit(): void {
    //service calls must be in ngOnInit
    this.productList=this.pdataService.getProductList()
  }

  delete(pid:number){
    for(var i=0;i<this.productList.length;i++)
    {
      if(this.productList[i].id==pid)
      {
        this.productList.splice(i,1)
      }
    }
  }

  addToCart(pid:number){
    //now this will send data to cartService
    //from cartService cart will fetch the data
    //now this will only pass the id of particular product
    //in cart comp
    this.cartdata.setCartData(pid)
  }
}
