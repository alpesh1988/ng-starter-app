// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ENV_SEARCH_URL: 'http://localhost:18080/v1',
  KEYCLOAK_ROOT_URL: 'https://keycloak-keycloak.service-ci.efood.real-pp.de/auth',
  ENV_SEARCH_COCKPIT_KEYCLOAK_REALM: 'real',
  ENV_SEARCH_COCKPIT_KEYCLOAK_CLIENT_ID: 'searchCockpit',
  KEYCLOAK_CLIENT_SECRET: '8d5e4bfd-c784-4db6-ac03-5dbc3d0b56e2',
  cacheBusterHash: 'buildHashString'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
