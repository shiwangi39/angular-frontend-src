import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-userorderdetails',
  templateUrl: './userorderdetails.component.html',
  styleUrls: ['./userorderdetails.component.css']
})
export class UserorderdetailsComponent implements OnInit {
  orders:any = null;
  constructor(private ms:LaptopService,private router:Router) { }
  srh = localStorage.getItem("userid");
  ngOnInit(): void {
   
    this.ms.getuserorderdetails(this.srh).subscribe((fanta)=>{
      console.log(fanta)
      this.orders=fanta;

    })
  }
  Back(){
    this.router.navigate(['/products'])
  }
}
