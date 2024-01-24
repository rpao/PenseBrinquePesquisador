'use client';

import {
  Button,
  Card,
  CardBody,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from 'react-bootstrap';
import { LockFill, PersonBoundingBox } from 'react-bootstrap-icons';

export function Login() {
  return (
    <div className="flex-container flex-column login-main-container gradient-background full-size-container">
      <Card>
        <CardBody>
          <Form className="form">
            <FormGroup
              className="mb-3 flex-container form-group"
              controlId="formBasicEmail"
            >
              <FormLabel>
                <PersonBoundingBox size={30} />
              </FormLabel>
              <FormControl type="email" placeholder="Enter email" />
            </FormGroup>

            <FormGroup
              className="mb-3 flex-container form-group"
              controlId="formBasicPassword"
            >
              <FormLabel>
                <LockFill size={30} />
              </FormLabel>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>

            <Button className="accent-button" type="submit">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
