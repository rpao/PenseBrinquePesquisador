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
2. Authentication Context: manages and shares user authentication state across the components.

#### Logic

**Login Page:** if a valid token is found, redirects to home page, else, after email and password submition, a request gets a valid token for the user and store it in the localstorage. If the request return no token, an error is displayed.

**Other pages:** AuthProvide is responsible for search and check a valid token. If a valid user token is found: redirects to home (if loggin or root page), else keep page. If no valid token is found, redirects to login.

For all new `page.tsx`, the html page should use the following structure:

```html
<AuthProvider>
  <div>your code here</div>
</AuthProvider>
```

#### References

- [Token Based Authentication in React JS](https://marketsplash.com/tutorials/react-js/token-based-authentication-in-react-js/).
