import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ms:LaptopService,private router:Router) { 


  }
  data:any=null;
  fan:any;
  ID=localStorage.getItem("userid");
  quantity:any="1";
  productName:any;
  price:any;
  imageUrl:any;
  Ram:any;
  Storage:any;

  
  
  ngOnInit(): void {
      console.log(localStorage.getItem('token'));
      this.ms.getproduct()
      .subscribe((data:any)=>{
  
        this.data = data
        console.log(data)
       
        
      })
    
  }
  onlogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("userid")
    this.router.navigate(['/userlogin']);

  }
  onQuantityChange(product: any, quantity: number) {
    if (product.quantity==undefined) {
      product.quantity = 1; 
    } else {
      product.quantity = quantity;
    }
  }
  carts(product:any){
  
    if(product.productName){
        this.fan=product.productName;
    }
    console.log(product.quantity)
    let body={
     
      productName:product.productName,
      price:product.price*product.quantity,
      quantity:product.quantity,
      imageUrl:product.imageurl,
      Ram:product.ram,
      Storage:product.storage,
      userid:this.ID
    }

    this.ms.additemtocart(body).subscribe((data)=>{
      console.log(body);
      console.log(data);
      if(data!="not done"){
        alert("product added to cart");
      }
      else{
        alert("quantity");
      }
    })
    
  }
  goto(){
    this.router.navigate(['/cartitems'])
  }
  onclick(){
    this.router.navigate(['/userorderdetails'])
  }
 
}
