import {TestBed} from '@angular/core/testing';
import {HttpInterceptorFn} from '@angular/common/http';

import {appIdInterceptor} from './app-id.interceptor';

describe('appIdInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => appIdInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
