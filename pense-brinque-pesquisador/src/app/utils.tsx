import { BarChartProps } from "./components/charts/chart.types";
import { DashboardChart, DashboardPageProps } from "./modules/dashboards/dashboards.type";

const mockedBarChart: BarChartProps = {
  chartId: 'year-data',
  title: 'Year Result',
  responsive: true,
  borderWidth: 2,
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
      },]
  }
}

export function getDashboards(): DashboardPageProps {
  const barChart: DashboardChart = {
    headerTitle: "Year Results",
    chartData: { ...mockedBarChart }
  };

  const dashboards: DashboardPageProps = {
    dashboardCharts: [barChart]
  };
  return dashboards
}