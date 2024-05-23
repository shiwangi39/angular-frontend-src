import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  orders:any=null;
  constructor(private ms:LaptopService,private router:Router) { }



  ngOnInit(): void {
    this.ms.getorderdetails().subscribe((data)=>{
        this.orders=data;
    })
  }
  Back(){
    this.router.navigate(['/updateproducts'])
  }
  usersdata(){
    this.router.navigate(['/userdetails'])
  }

}
