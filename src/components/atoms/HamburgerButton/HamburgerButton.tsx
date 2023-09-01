import { StyledBurger } from './HamburgerButton.styles';

export type Props = {
  onClick: () => void;
  isActive: boolean;
};

export const HamburgerButton = ({ onClick, isActive }: Props) => (
  <StyledBurger
    onClick={onClick}
    isActive={isActive}
    tabIndex={0}
    aria-label="Button for toggling menu"
  >
    <span />
    <span />
    <span />
  </StyledBurger>
);
