'use client';

import AuthProvider from '@/app/authentication/authContext';
import Settings from './settings';

export default function Page() {
  return (
    <AuthProvider>
      <Settings />
    </AuthProvider>
  );
}
