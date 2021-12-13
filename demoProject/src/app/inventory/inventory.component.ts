import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsdDataService } from '../productsd-data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  products: Array<Product>=[]
  constructor(private pdataService:ProductsdDataService) {
    
   }

  ngOnInit(): void {
    //service calls must be in ngOnInit
    this.products=this.pdataService.getProductList()
  }

  setPrice(newPrice:number,prodId:number){
    for(var i=0;i<=this.products.length;i++)
    {
      if(this.products[i].id==prodId)
      {
        //update the value
        this.products[i].price=newPrice
      }
    }
  }
}
