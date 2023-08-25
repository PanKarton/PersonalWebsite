import { GlobalStyles } from '@/assets/globalStyles';
import StyledComponentsRegistry from '@/lib/registry';
import { AppProvider } from '@/providers/AppProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <GlobalStyles />
      <html>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </AppProvider>
  );
}
