import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Locators } from './shared/constants/locator';
import { Navbar, Container } from 'react-bootstrap';
import { UserData } from './shared/models/user';
import Link from 'next/link';
import { getMockedUser } from './utils';
import AppBrand from './components/AppBrand/AppBrand';
import UserMenu from './components/UserMenu/UserMenu';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: Locators.appName,
  description: Locators.appDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userData: UserData = getMockedUser();

  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar>
          <Container>
            <Link href="/" className="simple-link">
              <AppBrand />
            </Link>
            <UserMenu name={userData.name} />
          </Container>
        </Navbar>
        <div className="main-container">
          <div className="full-size-container">
            <BreadCrumb />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
