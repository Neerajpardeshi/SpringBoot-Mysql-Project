export class Product{
    id:number
    name:string
    category:string
    price:number

    constructor(id:number,name:string,category:string,price:number){
        this.id=id
        this.name=name
        this.category=category
        this.price=price
    }
}