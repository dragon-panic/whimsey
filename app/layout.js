import './globals.css';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Whimsey Tarot - Golden Dawn Study',
  description: 'Study the Golden Dawn system through tarot, astrology, and planetary correspondences',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
} 