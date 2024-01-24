'use client';

import './globals.css';
import AuthProvider from './authentication/authContext';

export const rootHref = '/';

export default function Home() {
  return (
    <AuthProvider>
      <main></main>
    </AuthProvider>
  );
}
