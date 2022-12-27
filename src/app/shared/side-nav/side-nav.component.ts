import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  userName: string = ''
  constructor(public location: Location, private common: CommonService) { this.getUserName()  }
  getUserName = async () => {
    this.userName = await this.common.getUserName()
  }
  ngOnInit(): void {
  }  
}
