'use client';

import {
  BarChartLine,
  FileEarmarkSpreadsheet,
  Gear,
} from 'react-bootstrap-icons';
import { type MenuButtonProps } from '../components/MenuButton/MenuButton';
import { Locators } from '../shared/constants/locator';
import './startMenu.css';
import { DashboardHref } from './dashboards/dashboardsPage';
import { ReportsHref } from './reports/reportsPage';
import { SettingsHref } from './settings/settings';
import RowMenu, { RowMenuType } from '../components/RowMenu/RowMenu';

export type StartMenuProps = {
  userRole: string;
};

export const homeHref = '/home';

export default function StartMenu() {
  const dashboardMenuButton: MenuButtonProps = {
    linkHref: DashboardHref,
    label: Locators.dashboard,
    icon: <BarChartLine size={100} />,
  };
  const reportMenuButton: MenuButtonProps = {
    linkHref: ReportsHref,
    label: Locators.reports,
    icon: <FileEarmarkSpreadsheet size={100} />,
  };
  const settingsMenuButton: MenuButtonProps = {
    linkHref: SettingsHref,
    label: Locators.settings,
    icon: <Gear size={100} />,
  };
  const rowMenu: RowMenuType[] = [
    [dashboardMenuButton, reportMenuButton, settingsMenuButton],
  ];

  return (
    <div className="start-menu-container full-size-container">
      <RowMenu rowsData={rowMenu} id={'line1'} />
    </div>
  );
}
