import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Locators } from './shared/constants/locator';
import { Navbar, Container } from 'react-bootstrap';
import Link from 'next/link';
import AppBrand from './components/AppBrand/appBrand';
import UserMenu from './components/UserMenu/userMenu';

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
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar>
          <Container>
            <Link href="/" className="simple-link">
              <AppBrand />
            </Link>
            <UserMenu />
          </Container>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
