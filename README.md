# OAuth 2.0 playground

## Overview

Application for educational purposes to see how the basic flow of OAuth 2.0 works.

## How to use it

- Set required environment variables.
- Install the dependencies by ejecuting `yarn` in the root directory.
- Run the app either with `yarn start`.
- You should see in the console how the steps are being executed and the result.

## Environment Variables

### Required

- CLIENT_ID

  Cliend ID to identify the Application.

  e.g. CLIENT_ID=70a933cef6e944c9b286d33eb8c82f5c

- CLIENT_SECRET

  Cliend Secret to identify the Application.

  e.g. CLIENT_SECRET=ca808205eb844559b7a22d345e9d336feb844559b7a2

- AUTHORIZE_URL

  For the Authorization step.

  e.g. AUTHORIZE_URL=https://api.example.com/oauth2/v1/authorize

- TOKEN_URL

  For the Token step.

  e.g. TOKEN_URL=https://api.example.com/oauth2/v1/token

- SCOPE

  Scope for the Authorization step.

  e.g. SCOPE=read

### Optional

- None

## Reading material

- https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
- https://developer.okta.com/authentication-guide/auth-overview/
