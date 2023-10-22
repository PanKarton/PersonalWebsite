import { motion } from 'framer-motion';

import styled from 'styled-components';

export const StyledMotionDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.contrastDarker};
  position: relative;

  .section-index {
    rotate: -90deg;
    font-size: ${({ theme }) => theme.fontSize.textSM};
  }

  a {
    margin-left: 3rem;
    display: block;
    font-size: ${({ theme }) => theme.fontSize.text4XL};
    color: ${({ theme }) => theme.color.contrastDarker};
  }
`;

export const Triangle = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 1rem;
  translate: 0 -50%;
  width: 0;
  height: 0;
  border-left: 0.25rem solid transparent;
  border-right: 0.25rem solid transparent;
  border-bottom: 0.25rem solid ${({ theme }) => theme.color.contrastDarker};
  rotate: -90deg;
`;

export const Line = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 4rem;
  width: 0;
  height: 0.0625rem;
  translate: 0 -50%;
  background-color: ${({ theme }) => theme.color.contrastDarker};
`;
