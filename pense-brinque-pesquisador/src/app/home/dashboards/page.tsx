'use client';

import { getDashboards } from '@/app/utils';
import DashboardPage from './dashboardsPage';
import AuthProvider from '@/app/authentication/authContext';

export default function Page() {
  const dashboardData = getDashboards();
  return (
    <AuthProvider>
      <DashboardPage dashboardCharts={dashboardData.dashboardCharts} />
    </AuthProvider>
  );
}
