# Description

Azure Active Directory (Azure AD) B2C is a popular business-to-consumer identity management service from Microsoft that enables you to customize and control how users sign up and sign in to your application.

While there are many examples out there how to use Azure B2C with an ASP.NET Core web application, it's hard to find examples that performs identity management with Azure AD B2C using an Angular application.

In this article we will create an Angular 8 web application that authenticate against an Azure AD B2C and calls a secured ASP.NET Core-Web-API.

## Prerequisites

Azure AD B2C Directory

.NET Core command-line interface (CLI)

Angular CLI


# AzureAdB2cAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Libraries used

OpenID Connect (OIDC) authentication -  angular-oauth2-oidc npm module

It is OpendID certified and has lot of handy features like automatically adding the access token to certain URLs when calling a Web API.

npm i angular-oauth2-oidc --save