import { GlobalStyles } from '@/assets/globalStyles';
import StyledComponentsRegistry from '@/lib/registry';
import { AppProvider } from '@/providers/AppProvider';
import { Courier_Prime } from 'next/font/google';

const courierPrime = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <html>
        <body suppressHydrationWarning={true} className={courierPrime.className}>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </AppProvider>
  );
}
