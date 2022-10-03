import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveChanges = ()  =>{
    // this.router.navigateByUrl('/product')
    Swal.fire('Thank you...', 'Your category has been listed! succesfully!', 'success')
  }
}
