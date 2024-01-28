'use client';

import './login.css';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import { LockFill, PersonBoundingBox } from 'react-bootstrap-icons';
import Link from 'next/link';
import { useState, useCallback, SetStateAction } from 'react';
import authenticationServer from '../authentication/authenticationServer';
import { homeHref } from '../home/page';
import { AuthenticationContext } from '../authentication/authenticationContext';
import { UserData, userDataToString } from '../shared/models/user.model';
import { useCookies } from 'react-cookie';
import routerHandler from '../router/routerHandler';
import { Cookies } from '@/cookieKeys';

export default function Login() {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [decodedUser, setDecodedUser] = useState<UserData | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const setCookie = useCookies([Cookies.userTokenKey, Cookies.userDataKey])[1];

  const handleEmailChange = useCallback(
    (e: { target: { value: SetStateAction<string> } }) =>
      setEmail(e.target.value),
    [setEmail],
  );

  const handlePasswordChange = useCallback(
    (e: { target: { value: SetStateAction<string> } }) =>
      setPassword(e.target.value),
    [setPassword],
  );

  /* eslint-disable no-unused-vars */
  const handleLoginSubmit = useCallback(
    async (event) => {
      const { token, decodedUser } = await authenticationServer.login({ email, password });
      setToken(token);
      setDecodedUser(decodedUser);

      if (!token || !decodedUser) return;

      if (token) setCookie(Cookies.userTokenKey, token);
      if (decodedUser) setCookie(Cookies.userDataKey, userDataToString(decodedUser));

      routerHandler.redirect(homeHref);
    },
    [email, password, setCookie],
  );
  /* eslint-enable no-unused-vars */

  return (
    <AuthenticationContext.Provider value={{ token, decodedUser}}>
      <div className="flex-container flex-column login-main-container gradient-background full-size-container">
        <Card>
          <CardBody>
            <Form className="form" onSubmit={handleLoginSubmit}>
              <FormGroup
                className="mb-3 flex-container form-group"
                controlId="formBasicEmail"
              >
                <FormLabel>
                  <PersonBoundingBox size={30} />
                </FormLabel>
                <FormControl
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </FormGroup>

              <FormGroup
                className="mb-3 flex-container form-group"
                controlId="formBasicPassword"
              >
                <FormLabel>
                  <LockFill size={30} />
                </FormLabel>
                <FormControl
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  required
                />
              </FormGroup>

              <Button className="accent-button" type="submit">
                Login
              </Button>
            </Form>
          </CardBody>
          <CardFooter>
            {error && (
              <Alert variant="danger" onClose={() => setError('')} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>{error}</p>
              </Alert>
            )}
            <Link href={'/'}>Esqueci a senha</Link>
          </CardFooter>
        </Card>
      </div>
    </AuthenticationContext.Provider>
  );
}
