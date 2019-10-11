import { KeycloakService } from 'keycloak-angular';
import { environment } from '../environments/environment';

export function keycloakInitializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: {
      url: environment.KEYCLOAK_ROOT_URL,
      realm: environment.ENV_SEARCH_COCKPIT_KEYCLOAK_REALM,
      clientId: environment.ENV_SEARCH_COCKPIT_KEYCLOAK_CLIENT_ID,
      credentials: {
        secret: environment.KEYCLOAK_CLIENT_SECRET
      }
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: true
    },
    enableBearerInterceptor: true,
    bearerExcludedUrls: ['/assets']
  });
}
