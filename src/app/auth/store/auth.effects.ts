import { Actions, ofType } from '@ngrx/effects';

export class AuthEffects {
    // Actions permite vc executar algo quando alguma ação for desparada no reducer
    authLogin = this.actions$.pipe(
        // Este pipe permite que vc defina um filtro para os tipos de efeitos...
        // que deseja continuar neste canal que vc está criando
        ofType()
    )

    constructor(private actions$: Actions) {}

}
