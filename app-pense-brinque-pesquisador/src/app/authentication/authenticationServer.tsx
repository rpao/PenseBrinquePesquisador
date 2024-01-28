import { UserData, UserLoginCredentials } from '../shared/models/user.model';
import { decodeUserJWT, generateUserJWT } from './jwtUtils';
import routerHandler from '../router/routerHandler';
import { loginHref } from '../login/page';

export type AuthenticationTokenData = {
  token?: string;
  decodedUser?: UserData;
};

class AuthenticationServer {
  /**
   * Logging in the user.
   *
   * @throws - Localstorage and jsonwebtoken errors.
   * @param credentials
   */
  login = async (
    credentials: UserLoginCredentials,
  ): Promise<AuthenticationTokenData> => {
    const response = await routerHandler.GET(loginHref, credentials);
    console.log('[login]', response);
    const user: UserData = {
      name: 'Rebeca de Oliveira',
      email: credentials.email,
      role: 'Researcher',
      birthDate: undefined,
      profile: 'Admin',
    };
    const token = generateUserJWT(user);
    const decodedUser = decodeUserJWT(token);
    const authenticationTokenData: AuthenticationTokenData = {
      token,
      decodedUser,
    };
    return authenticationTokenData;
  };

  // /**
  //  * Logging out the user.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @returns void
  //  */
  // logout = () => this.removeUserToken();

  // /**
  //  * Verifies user token from NextRequest. If no request is provided, searches the token from localstorage.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @param request - NextRequest object.
  //  * @returns True if token verified with success.
  //  */
  // verifyUserToken = (): boolean => {
  //   const token = this.getUserToken();
  //   if (!token) throw new Error('No token found.');

  //   const tokenIsValid = verifyUserJWT(token);

  //   return !!tokenIsValid;
  // };

  // /**
  //  * Decodes the token to get user data.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @returns Decoded User
  //  */
  // decodeUserToken = (): UserData | undefined => {
  //   const token = this.getUserToken();
  //   return decodeUserJWT(token);
  // };

  // /**
  //  * Set user token in localstorage.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @param token
  //  * @returns void
  //  */
  // setUserToken = (token: string): void =>
  //   localStorageSetItem(this.userTokenKey, token);

  // /**
  //  * Get user token from localstorage.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @returns Token string or undefined.
  //  */
  // getUserToken = (): string | undefined =>
  //   localStorageGetItem(this.userTokenKey);

  // /**
  //  * Remove user token from localstorage.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @returns void
  //  */
  // removeUserToken = () => localStorageRemoveItem(this.userTokenKey);

  // /**
  //  * Set user data in localstorage.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @param user - UserData object
  //  * @returns void
  //  */
  // setUserData = (user: UserData | undefined): void => {
  //   const userString = userDataToString(user);
  //   localStorageSetItem(this.userDataKey, userString);
  // };

  // /**
  //  * Get user data from localstorage.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @returns user data string or undefined.
  //  */
  // getUserData = (): string | undefined => localStorageGetItem(this.userDataKey);

  // /**
  //  * Remove user data from localstorage.
  //  *
  //  * @throws - Localstorage is not defined.
  //  * @returns void
  //  */
  // removeUserData = () => localStorageRemoveItem(this.userDataKey);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthenticationServer();
