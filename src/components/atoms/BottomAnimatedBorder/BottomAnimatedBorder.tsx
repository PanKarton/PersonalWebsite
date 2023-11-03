import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import styled from 'styled-components';

const bottomBorderVariants = {
  hidden: {
    width: 0,
    left: '50%',
    transition: {
      duration: 0.25,
    },
  },
  visible: {
    width: '100%',
    left: '0',
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    width: 0,
    left: '50%',
    transition: {
      duration: 0.25,
    },
  },
};

export const BottomBorder = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 0;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
`;

export const BottomAnimatedBorder = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', () => setScrollPosition(window.scrollY));

    return () => {
      window.removeEventListener('scroll', () => setScrollPosition(window.scrollY));
    };
  }, [scrollPosition]);

  return (
    <AnimatePresence mode="wait">
      {scrollPosition > 160 && (
        <BottomBorder
          variants={bottomBorderVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      )}
    </AnimatePresence>
  );
};
