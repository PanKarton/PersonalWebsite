import styled from 'styled-components';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';

export const StyledNav = styled(motion.nav)`
  position: fixed;
  inset: 0;

  background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
  z-index: 2;
`;

const variants = {
  hidden: { y: '-100%' },
  visible: { y: '0' },
  exit: { y: '-100%' },
};

type BackdropMenuProps = {
  isActive: boolean;
};

export const BackdropMenu = ({ isActive }: BackdropMenuProps) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <StyledNav
        key="backdrop"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: 'just' }}
      >
        <li>
          <a href="#hello">HOME</a>
        </li>
        <li>
          <a href="#about-me">ABOUT ME</a>
        </li>
        <li>
          <a href="#my-projects">MY PROJECTS</a>
        </li>
        <li>
          <a href="#contact-me">CONTACT ME</a>
        </li>
      </StyledNav>
    )}
  </AnimatePresence>
);
