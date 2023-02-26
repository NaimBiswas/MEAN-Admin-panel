import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { CommonService } from 'src/app/shared/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  headers = new HttpHeaders();
  token: string | any
  users : any
  response:any
  constructor(private http:HttpClient, private commonService: CommonService) {
    this.commonService.getValue('refresh').then((data:any) => {
      this.token = data
    })
  }
  
  ngOnInit(): void {
    this.getAllAdmin('1')
  }
  getAllAdmin =async (page:any, limit=10,) => {
    this.http.get(environment.apiUrl+APISEndPoint.getAllAdmin).subscribe((_admins:any) => {
      this.users = _admins.results
      this.response = _admins
    }, err => {

    })
  }
}
