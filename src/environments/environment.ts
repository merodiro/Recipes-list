// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDMh19zY0diTN9N4OFRNtDkwUrDG8rtTkg',
    authDomain: 'recipes-book-c860e.firebaseapp.com',
    databaseURL: 'https://recipes-book-c860e.firebaseio.com',
    projectId: 'recipes-book-c860e',
    storageBucket: 'recipes-book-c860e.appspot.com',
    messagingSenderId: '705327038129'
  }
};
