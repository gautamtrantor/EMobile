// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyASk2AYm2wv7V2OmNwachK7nSYpZiMbvpA",
    authDomain: "emobile-ram.firebaseapp.com",
    databaseURL: "https://emobile-ram.firebaseio.com",
    projectId: "emobile-ram",
    storageBucket: "emobile-ram.appspot.com",
    messagingSenderId: "62231411921"
  }
};
