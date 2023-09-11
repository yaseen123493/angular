import { TestBed } from '@angular/core/testing';

import { ApiServiceInterceptor } from './api-service.interceptor';

describe('ApiServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiServiceInterceptor = TestBed.inject(ApiServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
