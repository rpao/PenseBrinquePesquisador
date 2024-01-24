'use client';

import AuthProvider, { AuthContext } from '@/app/authentication/authContext';
import './userMenu.css';
import authService from '@/app/authentication/authService';
import { ProfileHref } from '@/app/home/settings/profile/profile';
import {
  Locators,
  findUserRoleLocatorForString,
} from '@/app/shared/constants/locator';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'react-bootstrap';
import { BoxArrowRight, PersonCircle } from 'react-bootstrap-icons';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { rootHref } from '@/app/page';
import { useRouter } from 'next/navigation';
import { UserData } from '@/app/shared/models/user';

export default function UserMenu() {
  const [user, setUser] = useState<UserData | undefined>(
    authService.getUserLoggedIn(),
  );
  const router = useRouter();

  const handleLogoutClick = useCallback(() => {
    authService.logout();
    setUser(undefined);
    router.push(rootHref);
  }, []);

  console.log(user);

  return (
    <AuthProvider>
      {user && (
        <div className="flex-container">
          <Dropdown
            as={ButtonGroup}
            id={'user-menu'}
            key={'user-menu-outline-secondary'}
          >
            <DropdownToggle
              variant={'outline-light'}
              split
              id="user-menu-dropdown-split-basic"
            >
              <div>
                <span className="user-name">{user.name}</span>
                <span className="user-role">
                  |{findUserRoleLocatorForString(user.role)}
                </span>
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem eventKey="user-profile">
                <Link href={ProfileHref}>
                  <PersonCircle />
                  {Locators.profile}
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button
            variant="outline-light"
            className="logout-button"
            onClick={handleLogoutClick}
          >
            <BoxArrowRight size={20} />
          </Button>
        </div>
      )}
    </AuthProvider>
  );
}
