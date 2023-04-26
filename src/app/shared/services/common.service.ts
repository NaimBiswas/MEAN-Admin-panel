import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userName: any;

  constructor(private router: Router, private http: HttpClient,) { new HttpHeaders({'Access-Control-Allow-Origin': '*'})}

  setValue = async (key:string,value:string) => {
    localStorage.setItem(key, value)
  }
  getValue = async (key:string) => {
    const value = localStorage.getItem(key)
    return value
  }
  deleteValue =async (key:string) => {
    localStorage.removeItem(key)
  }
  navigate =async (url:string) => {
    this.router.navigate([url])
  }
  getUserName =async () => {
    let user: any= await this.getValue('user')
    user = JSON.parse(user)
    return user?.name || user?.userName
  }
  generatePageChangeHeader (page:number | any, limit:number | any) {
    return  {
      page:page.toString(),
      limit:limit.toString()
    }
  }
  async getData  (urlWithQuery:string, page:Number =1, limit:number =10) {
    const apiData = await  this.http.get(environment.apiUrl+urlWithQuery, {headers: this.generatePageChangeHeader(page, limit)}).toPromise()
    return apiData
  }
  messageToShow (message:string, position: string | any, icon:string | any, showConfirmButton:boolean | any, timer:number | any) {
    Swal.fire({
      position: position,
      icon: icon,
      title: message,
      showConfirmButton: showConfirmButton,
      timer: timer
    })
  }
  logOut =async () => {
    this.deleteValue("access")
    this.deleteValue("refresh")
    this.deleteValue("user")
    this.navigate("/login")
  }
}

