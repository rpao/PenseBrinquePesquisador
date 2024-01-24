import { BarChartProps } from "@/app/components/Charts/chart.types";

export type DashboardChart = {
  headerTitle: string;
  chartData: BarChartProps;
};

export type DashboardPageProps = {
  dashboardCharts: DashboardChart[];
};
