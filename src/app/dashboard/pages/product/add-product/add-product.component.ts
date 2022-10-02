import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isSubmitSuccess: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  saveChanges =()  =>{
    this.isSubmitSuccess = true
  }
}
