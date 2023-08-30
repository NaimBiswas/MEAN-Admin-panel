import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  constructor(private commonServe: CommonService, private router: Router) {}
 async canActivate() {
      const token:any = await this.commonServe.getValue("access")
      if(token) {this.router.navigate(['/dashboard']); return false}
      return true;
  }
  
}
