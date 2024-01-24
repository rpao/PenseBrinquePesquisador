import axios from 'axios';
import { UserData } from '../shared/models/user';

export const axiosHeader = () => {
  const token = localStorage.getItem('userToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

/**
 *  JSONWebToken - JWT
 *  1h = 3600s
 *  30min = 1800s
 */
export const jwtSignOptions = { expiresIn: '3600s', algorithm: 'HS256' }; // expires in 1 hour.
export const jwtSecretOrPrivateKey = 'shhhhh';

/**
 * Converts data decoded from token into user data.
 *
 * @param o - Object with token data.
 * @returns - UserData object
 */
export const tokenDataToUserData = (o: unknown): UserData => {
  const tokenData = o as any;
  const userFromToken: UserData = {
    name: tokenData.name ?? '',
    role: tokenData.role ?? undefined,
    email: tokenData.email ?? '',
    birthDate: tokenData.birthDate ?? undefined,
    profile: tokenData.profile ?? undefined,
  };

  return userFromToken;
};
