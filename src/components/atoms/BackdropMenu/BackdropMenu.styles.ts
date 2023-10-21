import { motion } from 'framer-motion';

import styled from 'styled-components';

export const StyledMotionDiv = styled(motion.nav)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
  z-index: 2;
  display: grid;
  place-items: center;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a {
    display: block;
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.text4XL};
  }
`;
