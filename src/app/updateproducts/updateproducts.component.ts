import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {

  constructor(private ms:LaptopService,private router:Router) { }
  formHeader="Add laptops";
  showForm=false;
  productName:string="";
  laptops:any=null;
  price:any;
  productDescription:any;
  Ram:any;
  categoryId:any;
  Storage:any;
  id=null;
  imageurl:any;
  Category:any=null;
  showcat=false;

  openForm(data:any=null){
    this.clearForm();
    this.showForm=true;
    
    
    if(data){
      this.productName=data.productName;
      this.Ram=data.ram;
      this.productDescription=data.productDescription;
      this.Storage=data.storage;
      this.price=data.price;
      this.categoryId=data.categoryId;
      this.imageurl=data.imageurl;

      this.formHeader="Edit Products"
      this.id=data.id;
   
    }
    else{
      this.id=null;
      this.formHeader="Add Products"
    }

  }
  

  closeForm(){
    this.clearForm()
    this.showForm=false
  }
  clearForm(){
    this.productName="";
    this.price="";
    this.productDescription="";
    this.Ram="";
    this.Storage="";
    this.categoryId="";
    this.imageurl="";
  }

  saveLaptop(){
    this.showForm=false;
    
    if(this.id!=null){
      let body={
        productName:this.productName,
        productDescription:this.productDescription,
        price:this.price,
        Ram:this.Ram,
        Storage:this.Storage,
        categoryId:this.categoryId,
        imageurl:this.imageurl,
        id:this.id
      }
      this.ms.putlaptop(body,this.id).subscribe((data)=>{
        this.getlaptop()
        alert("edited successfully")
      })      
    }
    else{
      let body={
        productName:this.productName,
        productDescription:this.productDescription,
        price:this.price,
        Ram:this.Ram,
        Storage:this.Storage,
        categoryId:this.categoryId,
        imageurl:this.imageurl
        
      }
    this.ms.postlaptop(body).subscribe((data)=>{
      this.getlaptop()
      alert("laptop added successfully")
    })
  }
    
  }

  


  ngOnInit(): void {
    this.getlaptop()
  }

  getlaptop(){
    this.ms.fetchLaptop().subscribe((data=>{
      this.laptops=data
    }))
  }

  deleteLaptop(id:any){
    this.ms.deleteLaptop(id).subscribe((res)=>{
        this.getlaptop()
    })
  }
  opencategory(){
      this.showcat=true;
      this.ms.getcategory().subscribe((cool)=>{
      this.Category=cool;
    })
  }
  closecat(){
    this.showcat=false;
  }

  openorderdetails(){
    this.router.navigate(['/orderdetails'])
  }
  onlogout(){
    localStorage.removeItem("adtoken");
    this.router.navigate(['/adminlogin']);
  }
}
