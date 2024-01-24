import { BarChartProps } from './components/Charts/chart.types';
import {
  DashboardPageProps,
  DashboardChart,
} from './home/dashboards/dashboards.type';
import { findLocatorForString } from './shared/constants/locator';
import {
  BreadcrumbData,
  BreadcrumbItemData,
} from './shared/models/breadcrumbData';
import { UserData } from './shared/models/user';

const mockedBarChart: BarChartProps = {
  chartId: 'year-data',
  title: 'Year Result',
  responsive: true,
  borderWidth: 2,
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
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
      },
    ],
  },
};

export function getDashboards(): DashboardPageProps {
  const barChart: DashboardChart = {
    headerTitle: 'Year Results',
    chartData: { ...mockedBarChart },
  };

  const dashboards: DashboardPageProps = {
    dashboardCharts: [barChart],
  };
  return dashboards;
}

/**
 * Receives a date and return a string in 'DD/MM/YYYY' format.
 *
 * @param date - Original date.
 * @returns Formatted string.
 */
export const getStringDateDDMMYYYY = (date: Date | undefined): string => {
  if (!date) return '--';

  const dateInfo = date.toISOString().split('T')[0].split('-');
  return `${dateInfo[1]}/${dateInfo[2]}/${dateInfo[0]}`;
};

/**
 * Converts an object to string.
 *
 * @param u - User object.
 * @returns Final string.
 */
export const userToString = (u: UserData): string =>
  `{'birthDate':'${u.birthDate}','email':'${u.email}','name':'${u.name}','profile':${u.profile},'role':'${u.role}'`;
