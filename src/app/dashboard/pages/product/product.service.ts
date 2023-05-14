import { Injectable } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { ProductDetails } from 'src/app/shared/interface/interface';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _apiService: ApiService) {}

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  async saveProduct (productDetails: ProductDetails) {
    try {
      const data = await this._apiService.postService(APISEndPoint.getAllProducts,productDetails)
      console.log(data);
    } catch (error: any) {
      
      let message:string = ""
      if(error.error)  {
        if(error?.error?.error.length) {
          error?.error?.error.forEach(async (_err:any) => {
            message = message.length? message.concat(",\n", _err.message) : _err.message
          });
        }
      }  
      this.Toast.fire({
        icon: 'error',
        background:"#191C24",
        title: message
      })  
    }
  }
  async getProductCategories(): Promise<any> { 
    try {
      const data = await this._apiService.getAllService(APISEndPoint.category, 1, 1000)
      return data
    } catch (error:any) {
      this.Toast.fire({
        icon: 'error',
        background:"#191C24",
        title: error?.error?.error
      })
    }
  }
}
