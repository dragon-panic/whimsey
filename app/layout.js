import './globals.css';
import Navigation from './components/Navigation';
import { DeckProvider } from './contexts/DeckContext';

export const metadata = {
  title: 'Whimsey Tarot - Golden Dawn Study',
  description: 'Study the Golden Dawn system through tarot, astrology, and planetary correspondences',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DeckProvider>
          <Navigation />
          {children}
        </DeckProvider>
      </body>
    </html>
  );
} 