import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryType, ProductDetails } from 'src/app/shared/interface/interface';
import { ProductModel } from 'src/app/shared/models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private router:Router,private _productService: ProductService, private el: ElementRef) { }
  isSubmitSuccess: boolean = false
  regex = '^[a-zA-Z]+$';
  categories!: Array<CategoryType>;
  productDetails: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.min(2,), Validators.max(50), Validators.pattern(this.regex)]),
    manufacturerBrand : new FormControl("",[Validators.required, Validators.min(2,), Validators.max(50), Validators.pattern(this.regex)]),
    manufacturerName: new FormControl("",[Validators.required, Validators.min(2,), Validators.max(50), Validators.pattern(this.regex)]),
    price: new FormControl("",[Validators.required]),
    discount: new FormControl("",[Validators.required]),
    discountPrice: new FormControl("",[Validators.required]),
    category: new FormControl({},[Validators.required]),
    description: new FormControl("",[Validators.required, Validators.min(2), Validators.max(50)]),
    image: new FormControl("",[Validators.required, Validators.min(1)]),
    metaTitle: new FormControl("", [Validators.required, Validators.min(2), Validators.max(50)]),
    metaKeyword: new FormControl("",[Validators.required, Validators.min(2), Validators.max(50)]),
    metaDescription: new FormControl(""),
  })
  ngOnInit(): void {
    this.getCategories()
  }
  async getCategories() {
    const data  = await this._productService.getProductCategories()
    this.categories = data?.results
  }
  setCategory(event:any):void {
    const category:CategoryType[] = this.categories.filter(_cat => _cat._id === event.target.value)
    this.productDetails.value.category = {
      categoryId: category[0]._id,
      name: category[0].name
    }
  }
  ngDoCheck(changes:any): void {
    if (this.productDetails.invalid) {
      for (const key of Object.keys(this.productDetails.controls)) {
        if (this.productDetails.controls[key].invalid && this.productDetails.controls[key].touched) {
          const invalidControl = this.el.nativeElement.querySelector(
            '[formcontrolname="' + key + '"]',
          );
          // invalidControl.focus();
          invalidControl.classList.add("border-red")
        }
      }
    }
  }
  uploadImage(event:any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
  }
  handleReaderLoaded(readerEvt: any) {
    const binaryString = readerEvt.target.result;
    const base64textString = btoa(binaryString);
    this.productDetails.value.image = base64textString
  }
  saveChanges = async (productDetails: ProductDetails | any)  =>{
    if(this.productDetails && this.productDetails.status === "INVALID") {
      this.productDetails.markAllAsTouched();
      return;
    }
    this.isSubmitSuccess = true
    const productModel:ProductDetails = new ProductModel(productDetails.value).createProductModel()
    console.log('>>>>>>>>>>>', productModel)
    const productService = await this._productService.saveProduct(productModel)
    // this.router.navigateByUrl('/product')
    // Swal.fire('Thank you...', 'Your product has been listed! succesfully!', 'success')
  }
  cancelChanges  = async () => {
    Swal.fire({
      title: 'Are you sure want to cancelled?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancelled it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Cancelled!',
          'Your imaginary file has been cancelled.',
          'success'
        )
        this.router.navigate(['/product'])
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
