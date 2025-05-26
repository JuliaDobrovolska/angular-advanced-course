import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd/message';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(NzMessageService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 400: errorMessage = 'Bad Request'; break;
          case 401: errorMessage = 'Unauthorized - Please login'; break;
          case 403: errorMessage = 'Forbidden - Access denied'; break;
          case 404: errorMessage = 'Resource not found'; break;
          case 500: errorMessage = 'Internal Server Error'; break;
          case 503: errorMessage = 'Service Unavailable'; break;
          case 504: errorMessage = 'Gateway Timeout'; break;
          default: errorMessage = `Error ${error.status}: ${error.statusText || 'Unknown error'}`;
        }
      }

      messageService.error(errorMessage);
      return throwError(() => error);
    })
  );
};
