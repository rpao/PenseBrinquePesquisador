import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import UserMenu from './components/userMenu/userMenu';
import AppBrand from './components/appBrand/appBrand';
import StartMenu from './modules/startMenu/startMenu';
import { UserData } from './models/user';

import './globals.css';

export default function Home() {
  const userData: UserData = { name: 'Unknown', role: 'admin' };

  return (
    <main>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <AppBrand />
          <UserMenu name={userData.name} />
        </Container>
      </Navbar>
      <StartMenu userRole={userData.role} />
    </main>
  );
}
