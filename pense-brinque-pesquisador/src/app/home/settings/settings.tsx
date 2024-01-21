import { MenuButtonProps } from '@/app/components/MenuButton/MenuButton';
import RowMenu, { RowMenuProps } from '@/app/components/RowMenu/RowMenu';
import { ProfileHref } from './profile/profile';
import { PersonSquare } from 'react-bootstrap-icons';

export const SettingsHref = 'home/settings';

export default function Settings() {
  const profileOption: MenuButtonProps = {
    linkHref: ProfileHref,
    label: 'Profile',
    icon: <PersonSquare size={100} />,
  };

  const menuOptions: RowMenuProps = {
    rowsData: [[profileOption]],
    id: 'settings-menu-options',
  };

  return (
    <div>
      <RowMenu {...menuOptions} />
    </div>
  );
}
