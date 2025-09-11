// app/layout.js
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LayoutWrapper from './LayoutWrapper';
import Providers from './providers';

export const metadata = {
  title: 'PN-INFOSYS Software Company',
  description: 'Website by PNINFOSYS',
  icons: { icon: '/favico.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="flex flex-col min-h-screen">
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
