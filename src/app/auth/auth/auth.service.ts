import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, Observable, of, throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signUpUrl = environment.signUpUrl;
  private sigInUrl = environment.signInUrl;

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(this.signUpUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(this.sigInUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errorMessage =
      'Ocorreu um erro desconhecido, tente novamente mais tarde!';
    if (!err.error || !err.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage =
          'O endereço de e-mail já está sendo usado por outra conta';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'O login por senha está desabilitado para este projeto.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'Bloqueamos todas as solicitações deste dispositivo devido a atividades incomuns. Tente mais tarde.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'A senha é inválida ou o usuário não possui senha.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'A conta de usuário foi desabilitada por um administrador.';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}
