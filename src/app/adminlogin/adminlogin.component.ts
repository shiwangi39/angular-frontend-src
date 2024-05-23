import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  userName=""
  password=""
  constructor(private ms:LaptopService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('adtoken')!=="invalid"){
      
      this.router.navigateByUrl('/updateproducts');
    }
    else(localStorage.getItem('adtoken')!=null)
    {
      this.router.navigateByUrl('/adminlogin');
    }
  }
  onSubmit(){
    debugger
    let body:any={
      userName:this.userName,
      password:this.password
    }
      this.ms.adminlogin(body).subscribe((admtok)=>{  
      console.log(admtok);
      if(admtok=="invalid"){
        alert("username or password mismatch");
      }
      else{
        
        console.log(admtok);
        localStorage.setItem("adtoken",admtok);
        this.router.navigateByUrl('/updateproducts');
        console.log("adtoken ="+admtok);
      }
    })
  }

}
