import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ILoginForm, IRegistrationForm } from '../auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private INITIAL_PATH = 'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/';
  private http = inject(HttpClient);

  get<T>(additionalPath: string = ''): Observable<T> {
    return this.http.get<T>(`${this.INITIAL_PATH}${additionalPath}`).pipe(
      catchError((error: HttpErrorResponse) => {
        const customError = new Error(`HTTP error: ${error.status}, ${error.message || ''}`);

        return throwError(() => customError);
      })
    );
  }

  post<T>(body: ILoginForm | IRegistrationForm, additionalPath: string = ''): Observable<T> {
    return this.http.post<T>(`${this.INITIAL_PATH}${additionalPath}`, body).pipe(
      catchError((error: HttpErrorResponse) => {
        const customError = new Error(`HTTP error: ${error.status}, ${error.message || ''}`);

        return throwError(() => customError);
      })
    );
  }
}
