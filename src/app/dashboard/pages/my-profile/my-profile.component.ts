import { Component, OnInit } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { CommonService } from 'src/app/shared/services/common.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userDetails:any
  constructor(private commonService: CommonService) {  }

  ngOnInit(): void {
    this.getUserDetails()
  }
  getUserDetails = async () => {
    const user:any = this.userDetails = await this.commonService.getValue('user');
    const jsonParse = JSON.parse(user)
    this.userDetails = await this.commonService.getData(APISEndPoint.getUser +`/${jsonParse.id.toString()}`)
 }
}
