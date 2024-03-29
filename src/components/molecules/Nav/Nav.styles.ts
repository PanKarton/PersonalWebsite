import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding-block: 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: 2;
  transition: border-bottom 200ms linear;

  @media screen and (min-width: 75rem) {
    display: block;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary};

  gap: 5rem;
  background-color: transparent;
`;

export const BottomBorder = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
`;
