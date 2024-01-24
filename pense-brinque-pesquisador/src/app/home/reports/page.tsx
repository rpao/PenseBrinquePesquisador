'use client';

import AuthProvider from '@/app/authentication/authContext';
import ReportsPage from './reportsPage';

export default function Page() {
  return (
    <AuthProvider>
      <ReportsPage />
    </AuthProvider>
  );
}
