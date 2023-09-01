import { StyledBurger } from './HamburgerButton.styles';

export type Props = {
  onClick: () => void;
  isActive: boolean;
};

export const HamburgerButton = ({ onClick, isActive }: Props) => (
  <StyledBurger
    onClick={onClick}
    tabIndex={0}
    aria-label="Button for toggling menu"
    className={isActive ? 'active' : ''}
  >
    <span />
    <span />
    <span />
  </StyledBurger>
);
