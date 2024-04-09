'use client';

import { GlobalStyles } from '@/assets/globalStyles';
import { PageLoader } from '@/components/molecules/PageLoader/PageLoader';
import StyledComponentsRegistry from '@/lib/registry';
import { AppProvider } from '@/providers/AppProvider';
import { Courier_Prime } from 'next/font/google';
import styled from 'styled-components';

const courierPrime = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
});

export const StyledBody = styled.body`
  &::-webkit-scrollbar {
    /* Hide scrollbar for Chrome, Safari and Opera */
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <html style={{ position: 'relative' }}>
        <StyledBody suppressHydrationWarning={true} className={courierPrime.className}>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <PageLoader />
            <>{children}</>
          </StyledComponentsRegistry>
        </StyledBody>
      </html>
    </AppProvider>
  );
}
