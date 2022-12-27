import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Location } from '@angular/common'; 
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {
  userName: string | any = ''
  constructor(public location: Location, private common: CommonService) { this.setUserHeader() }
  setUserHeader =async () => {
    this.userName = await this.common.getUserName()
  }
  ngOnInit(): void {
  }
  onSidebarClick = () => {
      $('.sidebar, .content').toggleClass("open");
      return false;
  }
  logOut =async () => {
    this.common.deleteValue("access")
    this.common.deleteValue("user")
    this.common.navigate("/login")
  }

}
