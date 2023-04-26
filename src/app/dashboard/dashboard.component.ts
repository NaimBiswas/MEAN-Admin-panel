import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { APISEndPoint } from '../shared/constant/common.constant';
import { salesRes } from '../shared/interface/interface';
import { CommonService } from '../shared/services/common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todaySales!: number
  todayRevenue!: number
  totalRevenue!: number
  totalSales!: number

  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.SalesCard()
  }
  async SalesCard () {
    const todaySales:salesRes | any =   this.commonService.getData(APISEndPoint.salesWithQuery + "todaySales")
    const todayRevenue:salesRes | any =   this.commonService.getData(APISEndPoint.salesWithQuery + "todayRevenue")
    const totalRevenue:salesRes | any = this.commonService.getData(APISEndPoint.salesWithQuery + "totalRevenue")
    const totalSales:salesRes | any =  this.commonService.getData(APISEndPoint.salesWithQuery + "totalSales")
    
    const data = await Promise.all([todaySales, todayRevenue, totalRevenue, totalSales])
    
    this.todaySales = data[0]?.data?.sells
    this.todayRevenue = data[1]?.data?.sells
    this.totalRevenue = data[2]?.data?.sells
    this.totalSales = data[3]?.data?.sells

  }
}
