import React, { createContext, useEffect, useState } from 'react';
import authService from '../authentication/authService';
import { usePathname, useRouter } from 'next/navigation';
import { tokenDataToUserData } from './authUtils';
import { UserData } from '../shared/models/user';
import { homeHref } from '../home/startMenu';

export const AuthContext = createContext<UserData | undefined>(undefined);

export default function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<UserData | undefined>(undefined);
  const router = useRouter();
  const url: string = usePathname();

  const isLoginPage = (): boolean => url.includes('login');
  const isRootPage = (): boolean => url === '/';

  useEffect(() => {
    try {
      const userLoggedInd = authService.getUserLoggedIn();
      if (userLoggedInd) {
        setUser(tokenDataToUserData(userLoggedInd));
        if (isLoginPage() || isRootPage()) router.push(homeHref);
      } else {
        if (!isLoginPage()) router.push('/login');
      }
    } catch (e) {
      if (!isLoginPage()) router.push('/login');
    }
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
