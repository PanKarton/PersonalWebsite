'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { AppProvider } from '@/providers/AppProvider';
import { Courier_Prime } from 'next/font/google';
import '../assets/globalStyles.css';

const courierPrime = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <html style={{ position: 'relative' }}>
        <body suppressHydrationWarning={true} className={`${courierPrime.className}`}>
          <StyledComponentsRegistry>
            <>{children}</>
          </StyledComponentsRegistry>
        </body>
      </html>
    </AppProvider>
  );
}
