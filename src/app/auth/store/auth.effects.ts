import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../auth.service';
import * as AuthActions from './auth.actions'
export class AuthEffects {
  private sigInUrl = environment.signInUrl;
  private firebaseAPIKey = environment.firebaseAPIKey;

  // Actions permite vc executar algo quando alguma ação for desparada no reducer
  @Effect()
  authLogin = this.actions$.pipe(
    // Este pipe permite que vc defina um filtro para os tipos de efeitos...
    // que deseja continuar neste canal que vc está criando
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http
        .post<AuthResponseData>(this.sigInUrl + this.firebaseAPIKey, {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true,
        })
    })
  )

  constructor(private actions$: Actions, private http: HttpClient) { }

}
