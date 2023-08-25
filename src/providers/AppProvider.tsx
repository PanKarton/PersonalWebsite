'use client';

import { theme } from '@/assets/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const AppProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
