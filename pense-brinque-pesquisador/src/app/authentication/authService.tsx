import axios from 'axios';
import { UserData, UserLoginCredentials } from '../shared/models/user';
import { jwtSecretOrPrivateKey, jwtSignOptions } from './authUtils';
import { userToString } from '../utils';

const url: string = 'http://localhost:3000';
const jwt = require('jsonwebtoken');
const userTokenLocalstorageKey = 'userToken';
const userDataLocalstorageKey = 'userData';

class AuthService {
  setUserToken = (token: string) =>
    localStorage.setItem(userTokenLocalstorageKey, token);

  clearUserToken = () => localStorage.removeItem(userTokenLocalstorageKey);

  setUserData = (user: UserData) =>
    localStorage.setItem(userDataLocalstorageKey, userToString(user));

  clearUserData = () => localStorage.removeItem(userDataLocalstorageKey);

  // Logging in the user
  async login(credentials: UserLoginCredentials): Promise<void> {
    try {
      const response = await axios.get(`${url}/login`);
      const user: UserData = {
        name: 'Rebeca',
        role: 'Researcher',
        profile: 'Admin',
        email: credentials.email,
        birthDate: undefined,
      };
      const token = jwt.sign(user, jwtSecretOrPrivateKey, jwtSignOptions);
      const userFromToken = this.checkUserToken(token);
      this.setUserToken(token);
      this.setUserData(userFromToken);
    } catch (error) {
      throw error;
    }
  }

  // Logging out the user
  logout = () => {
    this.clearUserToken();
    this.clearUserData();
  };

  // Get user token from localstorage.
  getUserToken = (): string | null =>
    localStorage.getItem(userTokenLocalstorageKey);

  // Check if user token is valid.
  checkUserToken = (token: string) => jwt.verify(token, jwtSecretOrPrivateKey);

  // Check if user is logged in
  getUserLoggedIn = () => {
    try {
      const token = this.getUserToken();
      if (token) return this.checkUserToken(token);
    } catch (error) {
      console.log('[AUTHENTICATION_ERROR]', error);
      this.clearUserToken();
      throw error;
    }
    return undefined;
  };
}

export default new AuthService();
