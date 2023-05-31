import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!(request.body instanceof FormData)) {
       request = this.setCommonHeaders(request);
     } else {
       request = this.formDataHeaders(request);
     }

    return next.handle(request);
  }

  private setCommonHeaders(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      responseType: 'json'
    });
  }

  private formDataHeaders(request: HttpRequest<any>): HttpRequest<any> {
    return request;
  }
}
