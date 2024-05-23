import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  data:any;
  constructor(private ms:LaptopService,private route:Router) { }

  ngOnInit(): void {      /// that our components are ready and we can use them
    this.ms.getusersdata().subscribe((data)=>{    // 
      this.data=data;
    })
  }
  Back(){
    this.route.navigate(['/orderdetails'])
  }
}
