import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = this.setTokens(req);
    return next.handle(req);
  }

  private setTokens(request: HttpRequest<any>) {
    const setHeaders: { [key: string]: string } = {};
    if (!request.url.includes("token")) {
      setHeaders["Authorization"] = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
    }
    return request.clone({ setHeaders });
  }
}
