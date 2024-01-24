'use client';

import AuthProvider from '../authentication/authContext';
import StartMenu from './startMenu';

export default function Page() {
  return (
    <AuthProvider>
      <StartMenu />
    </AuthProvider>
  );
}
