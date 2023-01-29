import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { CreateOrUpdateUserModel } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  userName?: string = ''
  firstName?: string 
  lastName?: string 
  middleName?: string 
  email?: string 
  password?: string 
  role?: string 
  description?: string 
  image?: string 
  isActive?: boolean
  isBlocked?: boolean
  isDeleted?: boolean
  acStatus?: string
  constructor(private http: HttpClient, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  checkOnChange = async  (key:string, event:any, isUniq:boolean) => {
   const value = event.target.value;
    if(isUniq) {
      // api call for check on key stock 
        this.http.get(environment.apiUrl+APISEndPoint.iqUnique+ '/'+key+"/"+value+"/"+'user').subscribe({
          next(value) {
          },error(err) {
            Swal.fire(err?.error.message, 'error')
          },
        })
    }
  }
  saveChanges = async ()  =>{

   const userModel = new CreateOrUpdateUserModel(this.email,
    this.password,
    this.userName,
    this.firstName,
    this.lastName,
    this.middleName,
    this.role,
    this.description,
    this.image,
    this.isActive,
    this.isBlocked,
    this.isDeleted,
    this.acStatus)
   this.adminService.saveAdmin(userModel)
  }
  cancelChanges  = async () => {
    Swal.fire({
      title: 'Are you sure want to cancelled?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancelled it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Cancelled!',
          'Your imaginary file has been cancelled.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
