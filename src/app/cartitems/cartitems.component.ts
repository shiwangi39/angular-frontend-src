import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
  constructor(private route:Router,private ms:LaptopService ) {}
  carts:any;
  data:any;
  userid=localStorage.getItem("userid");
  ngOnInit(): void {
    console.log(this.userid);
    
    this.ms.getitems(this.userid).subscribe((data)=>{
     
      this.carts=data;
    })
  }

  onclick(){
    this.ms.deletecart(this.userid).subscribe((data)=>{

    })
    this.route.navigate(['/products'])
  }
  click(){
    this.route.navigate(['/products'])
  }
  buynowbtn(){
    
    this.ms.getitems(this.userid).subscribe((data)=>{
      console.log(data)
      const ordersToAdd = data.map(item => {
        const { id, ...rest } = item;
        return rest;
      });
      console.log(ordersToAdd)
      this.ms.addorder(ordersToAdd).subscribe(()=>{
          alert("order placed successfully")
      })
    })
    this.ms.deletecart(this.userid).subscribe((data)=>{

    })
    this.route.navigate(['/products'])
  }

}
