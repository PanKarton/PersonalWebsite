'use client';

import { BackdropMenu } from '@/components/molecules/BackdropMenu/BackdropMenu';
import { HamburgerButton } from '@/components/atoms/HamburgerButton/HamburgerButton';
import { useState } from 'react';

export const NarrowScreenNavWrapper = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleNavMenu = () => {
    setIsActive(prev => !prev);
  };

  return (
    <>
      <HamburgerButton isActive={isActive} onClick={handleToggleNavMenu} />
      <BackdropMenu isActive={isActive} handleToggleNavMenu={handleToggleNavMenu} />
    </>
  );
};
