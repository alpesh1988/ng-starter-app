export const environment = {
  production: true,
  ENV_SEARCH_URL: '{{ SEARCH_URL }}',
  KEYCLOAK_ROOT_URL: '{{ KEYCLOAK_ROOT_URL }}',
  ENV_SEARCH_COCKPIT_KEYCLOAK_REALM: 'real',
  ENV_SEARCH_COCKPIT_KEYCLOAK_CLIENT_ID: 'searchCockpit',
  KEYCLOAK_CLIENT_SECRET: '{{ KEYCLOAK_CLIENT_SECRET }}',
  cacheBusterHash: '{{ CACHE_BUSTER_HASH }}'
};
