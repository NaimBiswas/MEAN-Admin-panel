import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop = ()  =>{
    window.scroll(0,0);
  }
}
