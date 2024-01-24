'use client';

import AuthProvider from '@/app/authentication/authContext';
import Profile from './profile';

export default function Page() {
  return (
    <AuthProvider>
      <Profile />
    </AuthProvider>
  );
}
