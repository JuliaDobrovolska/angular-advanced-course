import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';
import {DUMMY_API_USERS} from './user.constant';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        UserService
      ]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch users', () => {
    const dummyResponse = {
      data: [{ id: '1', firstName: 'John', lastName: 'Doe' }],
      total: 1,
      limit: 10,
      page: 0
    };

    service.getUsers().subscribe(res => {
      expect(res.data.length).toBe(1);
      expect(res.data[0].firstName).toBe('John');
    });

    const req = httpMock.expectOne(`${DUMMY_API_USERS}/user?limit=10`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});

