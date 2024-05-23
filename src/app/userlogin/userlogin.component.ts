import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
    email=''
    password=''
  
  constructor(private ms:LaptopService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!="invaild"){
      this.router.navigateByUrl('/products');
    }
  }
  cool:any="";
  onSubmit(){
    debugger
    let body:any={
        email:this.email,
        Password:this.password
    }
      this.ms.userlogin(body).subscribe((moblog:any)=>{
          console.log(moblog)
          if(moblog!="invaild"){
        
              localStorage.setItem("token",moblog);
              this.router.navigateByUrl('/products');
            
            
          }
          else{
            alert("login username or password mismatch");
          }
      }
      )
      this.ms.getdata(body).subscribe((data:any)=>{
        this.cool=data;
        console.log(this.cool.name);
        console.log(this.cool)
        localStorage.setItem("userid",this.cool.id)
        
      })
  }
  

}
