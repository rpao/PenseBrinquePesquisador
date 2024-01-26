import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Locators } from './shared/constants/Locators';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
