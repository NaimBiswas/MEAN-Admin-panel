import { Component, OnInit } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allProduct!:any
  response!:any
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

  pageChange = async (page:any) =>{
    this.getAllProduct(page)
  }
}
