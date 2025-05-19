import {HttpInterceptorFn} from '@angular/common/http';

export const appIdInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: {
      'app-id': '682b8091ca5fd044eaa8ee22'
    }
  });

  return next(cloned);
};
