import './globals.css';

export const metadata = {
  title: 'Daily Astrological Tarot',
  description: 'Get your daily tarot card based on astrological decans',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 