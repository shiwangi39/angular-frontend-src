import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopService } from '../laptop.service';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(private ms:LaptopService, private route:ActivatedRoute,private router:Router) { }
  mobileName:any=""
  quantity:number=1
  customerName=""
  phoneNumber=""
  address=""
  userid=""
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.mobileName=params['productName'];
    })
  }
  product(){
    this.router.navigate(['/products']);
  }
  id=localStorage.getItem("userid");
  onOrder(){
 
    let body={
      mobileName:this.mobileName,
      quantity:this.quantity,
      customerName:this.customerName,
      phoneNumber:this.phoneNumber,
      address:this.address,
      userid:this.id
    }
    this.ms.postorder(body).subscribe((data=>{
      alert("Order placed successfully")
    }))
    this.clearForm();
  }
  clearForm(){
    this.mobileName="",
    this.quantity=1,
    this.customerName="",
    this.phoneNumber="",
    this.address=""
  }


}
