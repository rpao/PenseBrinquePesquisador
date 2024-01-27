import axios from 'axios';
import {
  UserData,
  UserLoginCredentials,
  userDataToString,
} from '../shared/models/user.model';
import { decodeUserJWT, generateUserJWT, verifyUserJWT } from './jwtUtils';
import {
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageSetItem,
} from './authenticationUtils';
import { NextRequest } from 'next/server';

class AuthenticationServer {
  private url: string = 'http://localhost:3001';
  private userTokenKey = 'userToken';
  private userDataKey = 'userData';

  /**
   * Logging in the user.
   *
   * @throws - Localstorage and jsonwebtoken errors.
   * @param credentials
   */
  login = async (credentials: UserLoginCredentials) => {
    try {
      await axios.post(`${this.url}/login`, credentials);
      const user: UserData = {
        name: 'Rebeca de Oliveira',
        email: credentials.email,
        role: 'Researcher',
        birthDate: undefined,
        profile: 'Admin',
      };
      const token = generateUserJWT(user);
      const decodedUser = decodeUserJWT(token);
      this.setUserToken(token);
      this.setUserData(decodedUser);
    } catch (error) {
      throw error;
    }
  };

  /**
   * Logging out the user.
   *
   * @throws - Localstorage is not defined.
   * @returns void
   */
  logout = () => this.removeUserToken();

  /**
   * Verifies user token from NextRequest. If no request is provided, searches the token from localstorage.
   *
   * @throws - Localstorage is not defined.
   * @param request - NextRequest object.
   * @returns True if token verified with success.
   */
  verifyUserToken = (request?: NextRequest): boolean => {
    const token = request
      ? request.cookies.get(this.userTokenKey)?.value
      : this.getUserToken();
    if (!token) throw new Error('No token found.');

    const tokenIsValid = verifyUserJWT(token);

    return !!tokenIsValid;
  };

  /**
   * Decodes the token to get user data.
   *
   * @throws - Localstorage is not defined.
   * @returns Decoded User
   */
  decodeUserToken = (): UserData | undefined => {
    const token = this.getUserToken();
    return decodeUserJWT(token);
  };

  /**
   * Set user token in localstorage.
   *
   * @throws - Localstorage is not defined.
   * @param token
   * @returns void
   */
  setUserToken = (token: string): void =>
    localStorageSetItem(this.userTokenKey, token);

  /**
   * Get user token from localstorage.
   *
   * @throws - Localstorage is not defined.
   * @returns Token string or undefined.
   */
  getUserToken = (): string | undefined =>
    localStorageGetItem(this.userTokenKey);

  /**
   * Remove user token from localstorage.
   *
   * @throws - Localstorage is not defined.
   * @returns void
   */
  removeUserToken = () => localStorageRemoveItem(this.userTokenKey);

  /**
   * Set user data in localstorage.
   *
   * @throws - Localstorage is not defined.
   * @param user - UserData object
   * @returns void
   */
  setUserData = (user: UserData | undefined): void => {
    const userString = userDataToString(user);
    localStorageSetItem(this.userDataKey, userString);
  };

  /**
   * Get user data from localstorage.
   *
   * @throws - Localstorage is not defined.
   * @returns user data string or undefined.
   */
  getUserData = (): string | undefined => localStorageGetItem(this.userDataKey);

  /**
   * Remove user data from localstorage.
   *
   * @throws - Localstorage is not defined.
   * @returns void
   */
  removeUserData = () => localStorageRemoveItem(this.userDataKey);
}

export default new AuthenticationServer();
