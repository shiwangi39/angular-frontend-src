import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http:HttpClient ) { }

  fetchLaptop(){
    const adtoken = localStorage.getItem('adtoken');
    console.log(adtoken);
    var header=new HttpHeaders({'Authorization' : `Bearer ${adtoken}` })
    return this.http.get('https://localhost:7019/api/Products/GetProduct',{headers:header})
  }
 
  deleteLaptop(id:any){
    return this.http.delete('https://localhost:7019/api/Products/'+id)
  }
  url='https://localhost:7019/api/Products'
  postlaptop(body:any){
    return this.http.post(this.url+"/addproducts",body)
  }

  putlaptop(body:any,id:any){
    return this.http.put("https://localhost:7019/api/Products/UpdateProducts/"+id,body)
  }

  userurl="https://localhost:7019/api/User"
  postuser(body:any){
    return this.http.post(this.userurl+"/Register",body, {responseType:'text'})
  }
  getproduct(){
    const token = localStorage.getItem('token');
    console.log(token);
    var header=new HttpHeaders({'Authorization' : `Bearer ${token}` })
    return this.http.get(this.userurl+"/GetProduct",{headers:header});
  }
  
  userlogin(body:any){
    return this.http.post(this.userurl+"/Login",body, {responseType:'text'})
  }
  postorder(body:any){
    return this.http.post(this.url+"/addOrder",body)
  }
  getcategory(){
    return this.http.get(this.userurl+"/Getcategory")
  }
  getorderdetails(){
    return this.http.get(this.url+"/GetOrderdetails")
  }
  adminlogin(body:any){
    return this.http.post(this.url+"/Login",body,{responseType:'text'})
  }
  getdata(body:any){
    return this.http.post(this.userurl+"/getdata",body)
  }
  getuserorderdetails(userid:any){
    return this.http.get(this.url+"/Getorderdetailsbyuserid?userid="+userid)
  }
  additemtocart(body:any){
    return this.http.post(this.userurl+"/additems",body)
  }
  
  getitems(userid: any): Observable<any[]> {
    return this.http.get(this.userurl+"/GetCartitems,"+userid).pipe(
      map((response: any) => {
        return Array.isArray(response) ? response : [response];
      })
    );
  }
  addorder(ordersToAdd:any){
    return this.http.post(this.userurl+"/addnewitem",ordersToAdd)
  }
  deletecart(userid:any){
    return this.http.delete(this.userurl+"/deletecart,"+userid,{responseType:'text'})
  }
  getusersdata(){
    return this.http.get(this.userurl+"/getuserdetails")
  }
}
