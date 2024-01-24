'use client';

import { useCallback, useState } from 'react';
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
import { UserLoginCredentials } from '../shared/models/user';
import authService from '../authentication/authService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthProvider from '../authentication/authContext';
import { homeHref } from '../home/startMenu';

export const loginHref = '/login';

export function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = useCallback(
    (e) => setEmail(e.target.value),
    [setEmail],
  );

  const handlePasswordChange = useCallback(
    (e) => setPassword(e.target.value),
    [setPassword],
  );

  const handleLoginSubmit = useCallback(
    async (event) => {
      try {
        event.preventDefault();
        const loginData: UserLoginCredentials = { email, password };
        await authService.login(loginData);
        router.push(homeHref);
        router.refresh();
      } catch (e) {
        throw e;
      }
    },
    [email, password, setError],
  );

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}
