# Authentication

See [Next.js - Authentication](https://nextjs.org/docs/app/building-your-application/authentication) for more information.

## Concepts

1. Authentication: verifies the identity of the user (requires the user to prove their identity).
2. Session Management: tracks the user's state across multiple requests (i.e. logged in).
3. Authorization: decides what parts of the application the user is allowed to access.


## Authentication Logic

### Strategy

See [Next.js - Authentication Strategies](https://nextjs.org/docs/app/building-your-application/authentication#authentication-strategies) for more Authentication Strategy info.

The chosen authentication logic is **Passwordless/Token-based authentication**.

- Enhenced security.
- Dependency on user's email/phone availability.

The user logs in, the server creates a unique token containing user data (JSON Web Token - JWT), this token is stored locally and used in every subsequent request (sent in request header).

### Implementation

#### Libraries

1. Axios _for making HTTP requests_.
2. jsonwebtoken _for handle JWTs_.

#### Structure

1. Authentication Service: manages login, logout and token handling.
2. Middleware: manages authorization. Reed [Protecting routes with Middleware](https://nextjs.org/docs/app/building-your-application/authentication#protecting-routes-with-middleware) for more info.
2. Authentication Context: manages and shares user authentication state across the components.

#### Logic


#### References

- [Token Based Authentication in React JS](https://marketsplash.com/tutorials/react-js/token-based-authentication-in-react-js/).
