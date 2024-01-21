import { Locators } from '@/app/shared/constants/locator';
import Link from 'next/link';
import { PersonCircle } from 'react-bootstrap-icons';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export type UserMenuProps = { name: string };

export default function UserMenu(props: UserMenuProps) {
  const profileHref = '/home/settings/profile';
  return (
    <DropdownButton
      as={ButtonGroup}
      id={'user-menu'}
      key={'user-menu-outline-secondary'}
      variant={'outline-light'}
      title={props.name}
    >
      <DropdownItem eventKey="user-profile">
        <Link href={profileHref}>
          <PersonCircle />
          {Locators.profile}
        </Link>
      </DropdownItem>
    </DropdownButton>
  );
}
