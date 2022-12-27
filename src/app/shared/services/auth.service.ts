import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import {APISEndPoint} from '../constant/common.constant'
import {LoginModel} from 'src/app/shared/models/user.model'
import { CommonService } from './common.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: any
  constructor(private http: HttpClient, private common: CommonService ) {  new HttpHeaders({'Access-Control-Allow-Origin': '*'})
  }

  login = async (email:String, password:String) => {
    const userModel = new LoginModel(email, password)
    this.http.post(environment.apiUrl+APISEndPoint.login, userModel)
    .subscribe({
      next:(data:any,) =>{
        Swal.fire({position: 'bottom-end',
        icon: 'success',
        title: 'Login has been succeed',
        showConfirmButton: false,
        timer: 1500})
        this.common.setValue("access", data?.tokens?.access?.token);
        this.common.setValue("refresh", data?.tokens?.refresh?.token);
        this.common.setValue("user", JSON.stringify(data?.user));
        this.common.navigate("/dashboard")
      }, error(err) {
        console.log(err);
      },
    });
    
  }
}
