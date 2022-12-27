import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private commonServe: CommonService, private router: Router) {}
  async canActivate() {
    const token =  await  this.commonServe.getValue("access")
    if(!token) {this.router.navigate(['/login']); return false}
    return true;
  }
  
}
