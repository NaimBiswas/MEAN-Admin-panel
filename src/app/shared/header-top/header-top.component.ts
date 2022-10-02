import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSidebarClick = () => {
      $('.sidebar, .content').toggleClass("open");
      return false;
  }

}
