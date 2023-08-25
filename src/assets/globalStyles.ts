'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
  box-sizing: border-box;
  font-family: var(--open-sans);
}

*,
*::before,
*::after {
  box-sizing: inherit;
  font-family: inherit;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

`;
