import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }  
}
