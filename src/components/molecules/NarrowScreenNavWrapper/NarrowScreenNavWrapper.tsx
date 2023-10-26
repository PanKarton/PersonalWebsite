import { BackdropMenu } from '@/components/molecules/BackdropMenu/BackdropMenu';
import { HamburgerButton } from '@/components/atoms/HamburgerButton/HamburgerButton';
import { useState } from 'react';
import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
  z-index: 2;

  @media screen and (min-width: 30.25rem) {
    height: 5rem;
  }

  @media screen and (min-width: 75rem) {
    display: none;
  }
`;

export const NarrowScreenNavWrapper = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleNavMenu = () => {
    setIsActive(prev => !prev);
  };

  return (
    <StyledNavWrapper>
      <HamburgerButton isActive={isActive} onClick={handleToggleNavMenu} />
      <BackdropMenu isActive={isActive} handleToggleNavMenu={handleToggleNavMenu} />
    </StyledNavWrapper>
  );
};
