'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalTypes = {
  children: ReactNode;
  isOpen: boolean;
};

export const Portal = ({ children, isOpen }: PortalTypes) => {
  return isOpen ? createPortal(children, document.body) : null;
};
