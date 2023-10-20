'use client';

import { HamburgerButton } from '@/components/atoms/HamburgerButton/HamburgerButton';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  inset: 0;
  /* background-color: ${({ theme }) => theme.color.primary}; */
  background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
  z-index: 2;
  translate: 0 -100%;
  animation: slideIn 300ms linear forwards;

  @keyframes slideIn {
    from {
      translate: 0 -100%;
    }
    to {
      translate: 0 0;
    }
  }
`;

export const NarrowScreenNav = () => {
  const [isActive, setisActive] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const handleToggleNavMenu = () => {
    if (isReversed) {
      setTimeout(() => {
        setisActive(prev => !prev);
        document.body.style.overflow = 'unset';
      }, 300);
    } else {
      document.body.style.overflow = 'hidden';
      setisActive(prev => !prev);
    }

    setIsReversed(prev => !prev);
  };

  return (
    <>
      <HamburgerButton isActive={isActive} onClick={handleToggleNavMenu} />
      {isActive
        ? createPortal(
            <StyledNav>
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
            </StyledNav>,
            document.body
          )
        : null}
    </>
  );
};
