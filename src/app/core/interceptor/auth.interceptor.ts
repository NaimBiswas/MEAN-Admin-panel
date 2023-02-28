import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: any;

  constructor(private commonService: CommonService) {}

 intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem('access')
    if(this.token){
      return next.handle(request.clone({ setHeaders: { "token": this.token, 'type':'access'} }));
    }else{
      return next.handle(request)
    }
  }
}
