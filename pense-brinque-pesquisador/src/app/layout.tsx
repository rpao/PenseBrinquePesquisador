import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Locators } from "./constants/locator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: Locators.AppName,
  description: Locators.AppDescription,
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
