import { Component } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { CommonService } from 'src/app/shared/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-import-product',
  templateUrl: './import-product.component.html',
  styleUrls: ['./import-product.component.css']
})
export class ImportProductComponent {
  allProduct!:any
  response!:any
  showDataLoader: boolean = false
  constructor(private _commonService : CommonService) { }
  ngOnInit(): void {
    this.getAllProduct(1)
  }
  async getAllProduct(page:any, limit=10) {
    this.showDataLoader = true
    const allProduct:any = await this._commonService.getGinData(APISEndPoint.getAllImports+'/', page, limit)
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
