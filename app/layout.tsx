import { Metadata } from 'next';
import './components/global.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

export const metadata: Metadata = {
  title: 'NASSA',
  description: 'Picture of the day app with calendar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>NASA APP</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="flex w-full flex-col items-center gap-6 bg-gray-100 h-full 2xl:h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
