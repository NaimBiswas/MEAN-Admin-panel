import { HttpClient,  HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { CreateOrUpdateUserModel } from 'src/app/shared/models/user.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  headers = new HttpHeaders();
  token: string | any
  constructor (private http: HttpClient, private commonService: CommonService, private route: Router) { 
     this.commonService.getValue('refresh').then((data:any) => {
      this.token = data
    })

  }

  saveAdmin = async (userModel:CreateOrUpdateUserModel) => {
    this.http.post(environment.apiUrl+APISEndPoint.saveAdmin, userModel).subscribe(value => {
    Swal.fire({
      title: 'You are about to end',
      text: "Admin has been created successfully",
      icon: 'success',
    }).then((result) => {
      if (result.value) {
        this.commonService.navigate('/dashboard')
      }
    })
   }, err => { 
    if(err.error.message == 'Token has been expired') {
      Swal.fire({
        title: 'You are about to end',
        text: err.error.message,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Logout!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.commonService.logOut()
        }
      })
      return
    }
    if(err.error){
      Swal.fire({
        title: 'Validation Error',
        text:  err.error?.message || err.error?.error[0].message ,
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'OK!',
        cancelButtonText: 'No, keep it'
      })
    }
   })
  }
}
