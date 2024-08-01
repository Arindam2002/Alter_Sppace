import { Inter } from 'next/font/google';
import { AOSInit } from './aos';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alter Sppace',
  description: 'Alter Sppace: Transforming Spaces with Elegance and Precision',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
