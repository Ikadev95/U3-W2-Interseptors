import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  // Metodo che intercetta la richiesta HTTP
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {    // Intercetta l'errore
        console.log(error);    // Stampa l'errore nella console
        return throwError(() => new Error(error));  // Emette l'errore usando throwError
      })
    );
  }
}
