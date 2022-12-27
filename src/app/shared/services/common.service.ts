import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userName: any;

  constructor(private router: Router) { }

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
}

