import { Component, OnInit } from '@angular/core';
import { Color, IResponse } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }
  showDataLoader: boolean = false;
  response!:  IResponse;
  headers = [
    {title: 'Date', columnName: "date"},
    {title: 'Pro. Name', columnName: "productName"},
    {title: 'Invoice', columnName: "invoice"},
    {title: 'Customer', columnName: "customer"},
    {title: 'Amount', columnName: "amount"},
    {title: 'Status', columnName: "status"},
  ]
  data = [
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
    {date: new Date().toISOString(),productName: "Mother Board",invoice: "INV-0123",customer:"Jhon Doe",amount: "$123",status: "Paid"},
  ]
  actions = [
    {title: 'Check Details', color: Color.SUCCESS},
    {title: 'Cancel', color: Color.DANGER},
  ]
  ngOnInit(): void {
    this.response = {
      totalResults:this.data.length,
      totalPages:Math.ceil(this.data.length/10),
      page:1
    }
  }
  pageChange = async (page:any) =>{
    // this.getAllProduct(page)
  }
}
