import { AuthConfig } from 'angular-oauth2-oidc';

// The values below are found in the discovery document which is located under:
// https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/v2.0/.well-known/openid-configuration?p={policy}
export const DiscoveryDocumentConfig = {
    url: 'https://acmecoyote.b2clogin.com/acmecoyote.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_signupsigning1'
}

export const authConfig: AuthConfig = {
    redirectUri: window.location.origin + '/index.html',
    responseType: 'token id_token',
    issuer: 'https://acmecoyote.b2clogin.com/3ee814d5-dba6-4462-bfad-4b275fbbc385/v2.0/',
    strictDiscoveryDocumentValidation: false,
    tokenEndpoint: 'https://acmecoyote.b2clogin.com/acmecoyote.onmicrosoft.com/oauth2/v2.0/token?p=B2C_1_signupsigning1',
    // The clientId is the Application Id of our web Azure AD application.
    loginUrl: 'https://acmecoyote.b2clogin.com/acmecoyote.onmicrosoft.com/oauth2/v2.0/token?p=B2C_1_signupsigning1',
    clientId: '5d0cff9f-c73e-4878-9cd9-d6cb118d25d9',
    // The scope for our API can be found under Published scopes inside the Azure AD api application
    scope: 'openid profile https://acmecoyote.onmicrosoft.com/api/demo.read https://acmecoyote.onmicrosoft.com/api/demo.write',
    skipIssuerCheck: true,
    clearHashAfterLogin: true,
    oidc: true,
}