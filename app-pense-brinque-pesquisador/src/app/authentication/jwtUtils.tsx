import {
  UserData,
  getProfileFromText,
  getRoleFromText,
} from '../shared/models/user.model';

const jwt = require('jsonwebtoken');
const secret = 'secret';
const options = { expiresIn: '1h' };
const errorCallback = (err: any, decoded: any): never => {
  console.log('JWT Decoded Foo:', '\nJWT Error:', decoded.foo, err);
  throw err;
};

/**
 * Generates a JWT (user token).
 *
 * @throws - jsonwebtoken errors.
 * @param user
 * @returns JWT token containing all user info.
 */
export const generateUserJWT = (user: UserData): string => {
  return jwt.sign(user, secret, options);
};

/**
 * Verifies a token and return the decoded value.
 *
 * @throws - jsonwebtoken errors.
 * @param token
 * @returns True if JWT is verified with success otherwise, False.
 */
export const verifyUserJWT = (token: string): boolean => {
  const tokenData = jwt.verify(token, secret, [options, errorCallback]);
  return !!tokenData;
};

/**
 * Decodes the received token and generates a valid UserData object.
 *
 * @throws - jsonwebtoken errors.
 * @param token
 * @returns Decoded user.
 */
export const decodeUserJWT = (
  token: string | undefined | null,
): UserData | undefined => {
  if (!token) return undefined;

  const decodedData = jwt.decode(token);
  const user: UserData = {
    name: decodedData?.name as string,
    role: getRoleFromText(decodedData?.role as string),
    email: decodedData?.email as string,
    profile: getProfileFromText(decodedData?.profile as string),
  };
  return user;
};
