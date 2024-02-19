import { motion } from 'framer-motion';

import styled from 'styled-components';

export const StyledMotionNav = styled(motion.nav)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: 2;
  display: flex;
  align-items: center;
  padding-left: clamp(1rem, 5vw, 4rem);
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 50rem) {
    position: absolute;
    top: 50%;
    right: 5rem;
    translate: 0 -50%;
  }
`;

export const BackgroundText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20rem;
  font-weight: 700;
  @media screen and (min-width: 50rem) {
    color: rgba(255, 255, 255, 0.03);
  }
  @media screen and (min-width: 62.5rem) {
    left: 2rem;
    translate: 0 -50%;
  }
`;
