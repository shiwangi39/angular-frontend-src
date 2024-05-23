import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ms:LaptopService) { }
  name:any;
  email:any;
  phone:any;
  password:any;
  city:any;

  submitForm(){
    
    
    let body={
      name:this.name,
      phone:this.phone,
      email:this.email,
      password:this.password,
      city:this.city
  }
    this.ms.postuser(body).subscribe((data)=>{
      if(data=="registerd"){
        alert("data successfully added");
      }else{
        alert("can't register with same email");
      }
      
    })
    this.clearForm()
}

  clearForm(){
    this.name="";
    this.email="";
    this.phone="";
    this.password="";
    this.city="";

  }
  ngOnInit(): void {
  }

}
