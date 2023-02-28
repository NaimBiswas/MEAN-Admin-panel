import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
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
  users:any = [];
  response:any;
  showDataLoader:boolean = false;
  constructor(private http:HttpClient, private commonService: CommonService,private next: HttpHandler) {
  }
  
  ngOnInit(): void {
    this.getAllAdmin(1)
  }
  getAllAdmin =async (page:any, limit=10) => {  
    this.showDataLoader = true;
    this.http.get(environment.apiUrl+APISEndPoint.getAllAdmin,{headers: this.commonService.generatePageChangeHeader(page, limit)}).subscribe((_admins:any) => {
      this.users = _admins.results
      this.response = _admins
      this.showDataLoader = false
    }, err => {
      console.log(err);
      // this.commonService.messageToShow(err.error.message, 'middle','error',true,2000)
    })
  }
  pageChange = async (page:any) =>{
    this.getAllAdmin(page)
  }
}
