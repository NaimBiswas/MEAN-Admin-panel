import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isSubmitSuccess: boolean = false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  saveChanges = ()  =>{
    this.isSubmitSuccess = true
    // this.router.navigateByUrl('/product')
    Swal.fire('Thank you...', 'Your product has been listed! succesfully!', 'success')
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
