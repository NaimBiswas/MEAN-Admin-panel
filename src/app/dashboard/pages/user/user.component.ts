import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { CommonService } from 'src/app/shared/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = []
  response: any
  showDataLoader: boolean = true
  constructor(private http:HttpClient, private commonService: CommonService,private next: HttpHandler) { }

  ngOnInit(): void {
    this.getUsers(1)
  }
  getUsers =async (page:any, limit=10) => {  
    this.showDataLoader = true;
    this.http.get(environment.apiUrl+APISEndPoint.getAllUsers+'?role=user',{headers: this.commonService.generatePageChangeHeader(page, limit)}).subscribe((_admins:any) => {
      this.users = _admins.results
      this.response = _admins
      this.showDataLoader = false
    }, err => {
      console.log(err);
      // this.commonService.messageToShow(err.error.message, 'middle','error',true,2000)
    })
  }
  pageChange = async (page:any) =>{
    this.getUsers(page)
  }
}
