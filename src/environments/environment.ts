// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseAPIKey: 'AIzaSyAnjQHvMh_-VfSH-fzsoTFhkvKh3F3jhAY',
  firebaseUrl:
    'https://recipe-book-course-a2e6d-default-rtdb.firebaseio.com/recipes.json',
  signUpUrl:
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  signInUrl:
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
