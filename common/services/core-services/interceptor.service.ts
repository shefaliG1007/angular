import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError(error => {
                console.log('error is intercept');
                if (error.status === 500) {
                    console.debug(new Date() + ': ' + JSON.stringify(error.statusText), error);
                } else if (error.status === 404) {
                    console.log(new Date() + ': ' + JSON.stringify(error.statusText), error);
                } else if (error.status === 401) {
                    console.warn(new Date() + ': ' + JSON.stringify(error.statusText), error);
                } else if (error.status === 0) {
                    console.log(new Date() + ': ' + JSON.stringify(error.statusText), error);
                } else {
                    console.error(new Date() + ': ' + JSON.stringify(error.statusText), error);
                }
                return throwError(() => new Error(error));
            })
        );
    }
}
