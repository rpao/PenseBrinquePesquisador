import { getDashboards } from "@/app/utils";
import DashboardPage from "./dashboardsPage";

export default function Page() {
  const dashboardData = getDashboards();
  return <DashboardPage dashboardCharts={dashboardData.dashboardCharts} />;
}