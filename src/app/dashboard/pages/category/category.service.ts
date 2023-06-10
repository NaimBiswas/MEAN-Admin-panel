import { Injectable } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { ICategory, ProductDetails } from 'src/app/shared/interface/interface';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class CategoryService  {
    constructor () {}

    save = async ():Promise<ICategory[]>  => {
        return new Promise<ICategory[]>((resolve, reject) => {})
    };

    getCategory = async ():Promise<ICategory[]> => {
        return new Promise<ICategory[]>((resolve, reject) => {})
    };
}