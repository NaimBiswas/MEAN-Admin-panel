import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoginPg : any
  title = 'ecom-admin-panel';
  constructor(private router: Router, private location: Location ) {}
  ngOnInit(): void {
    this.isLoginPage()
  }
  isLoginPage = async( ) => {
    // const isLoggedIn = true
    // if(isLoggedIn){
    //   this.router.navigateByUrl('/')
    // }else{
    //   this.router.navigateByUrl('/login')
    // }
  }
  ngOnDestroy(){
    this.isLoginPg = false
  }
 }
