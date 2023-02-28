import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CommonService } from '../shared/services/common.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private common: CommonService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          console.log(error.status, error.error.message);
          if(error.status === 401) {
            const message = "You session has been expired. Kindly login and try again"
            Swal.fire({position: 'bottom-end',
            icon: 'error',
            title: message,
            showConfirmButton: false,
            timer: 1500})
            this.common.logOut()    
          }
        }
        return throwError(errorMessage);
      })
    );
  }
}
