import { Component, OnInit } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { IResponse } from 'src/app/shared/interface/interface';
import { CommonService } from 'src/app/shared/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allProduct!:any
  response!:IResponse
  showDataLoader: boolean = false
  constructor(private _commonService : CommonService) { }

  ngOnInit(): void {
    this.getAllProduct(1)
  }
  async getAllProduct(page:any, limit=10) {
    this.showDataLoader = true
    const allProduct:any = await this._commonService.getGinData(APISEndPoint.getAllProducts+'/', page, limit)
    this.allProduct = allProduct.results
    this.response = {page:allProduct.page, totalPages:allProduct.totalPages, totalResults: allProduct?.totalResults}
    this.showDataLoader = false
  }
  CSVExport = async  () => {
    window.open(environment.apiGinURL+APISEndPoint.exportCsvProduct)
  }
  pageChange = async (page:any) =>{
    this.getAllProduct(page)
  }
}
