import { Component, OnInit } from '@angular/core';
import { APISEndPoint } from 'src/app/shared/constant/common.constant';
import { ICategory } from 'src/app/shared/interface/interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName: string = ''
  isShowDataLoader: boolean = false;
  isSave : boolean = false
  response: any;
  categories!: ICategory[]
  constructor(private api: ApiService) { 
    this.getCategories()
  }

  ngOnInit(): void {
  }
  saveChanges = async (): Promise<void>  =>{
    this.isSave = true
    if(this.categoryName && this.categoryName.length){
      try {
        const data:any = await this.api.postService(APISEndPoint.category, {name: this.categoryName, isActive: true})
        if(data?.success) {
          this.isSave = false
          this.getCategories()
          this.categoryName = ''
        }
        Swal.fire('Thank you...', 'Your category has been listed! successfully!', 'success')
      } catch (error:any) {
        this.isSave = false
        Swal.fire('Failed', error?.error?.error || error?.error?.error[0]?.message, 'error')
      }
    }
  }
  getCategories = async (page?:number, limit:number = 10): Promise<void> => {
    this.isShowDataLoader = true
    try {
      this.response = await this.api.getAllService(APISEndPoint.category.trim(), page, limit)

      const {results} = this.response

      if(results && results.length) {
        this.categories = results
        this.isShowDataLoader = false
      }
    } catch (error: any) {
      Swal.fire('Failed', error.message, 'error')
    }
  }

  pageChange = async (page:any): Promise<void> => {
    this.getCategories(page)
  }
}
