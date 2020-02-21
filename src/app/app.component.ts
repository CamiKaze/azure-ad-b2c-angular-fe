import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';
import { authConfig, DiscoveryDocumentConfig } from './config/auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient, private oauthService: OAuthService) {
    this.configure();
    this.oauthService.tryLoginImplicitFlow();
  }

  message: string;

  public getMessage() {
    this.http.get("https://localhost:1333/WeatherForecast", { responseType: 'text' })
      .subscribe(r => {
        this.message = r
        console.log("message: ", this.message);
      });
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get claims() {
    let claims = this.oauthService.getIdentityClaims();
    return claims;
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocument(DiscoveryDocumentConfig.url);
  }
}