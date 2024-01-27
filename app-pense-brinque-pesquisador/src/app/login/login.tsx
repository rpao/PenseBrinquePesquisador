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
import { UserLoginCredentials } from '../shared/models/user.model';
import { useState, useCallback, SetStateAction } from 'react';
import authenticationServer from '../authentication/authenticationServer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

  const handleLoginSubmit = useCallback(
    (event: { preventDefault: () => void }) => {
      event.preventDefault();
      authenticationServer.login({ email, password });
    },
    [email, password, setError],
  );

  return (
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
  );
}
