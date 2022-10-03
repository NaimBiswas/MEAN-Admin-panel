import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveChanges = ()  =>{
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
