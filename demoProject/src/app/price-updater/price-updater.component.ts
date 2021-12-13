import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-price-updater',
  templateUrl: './price-updater.component.html',
  styleUrls: ['./price-updater.component.css']
})
export class PriceUpdaterComponent implements OnInit {
  @Input()
  priceValue:number| undefined //this is name for the input text
    //in this var communcation of values bw inventory and priceupdater
    //will take place
  
  @Output()
  update=new EventEmitter<number>()
  //update is the name of custom event
  //here it is instance of Class EventEmitter of type number
  //because value is of number type, we can change it
  
  constructor() { }

  ngOnInit(): void {
  }
  updatePrice(){
    //this function will return the current value in input field
    //to parent inventory
    //using a custom event
    this.update.emit(this.priceValue) 
  }
}