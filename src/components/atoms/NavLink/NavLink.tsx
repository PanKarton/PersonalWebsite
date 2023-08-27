import { StyledLink } from './NavLink.styles';

export const NavLink = ({
  children,
  href,
  isActive,
}: {
  children: string;
  href: string;
  isActive: boolean;
}) => (
  <StyledLink href={href} className={isActive ? 'active' : ''}>
    {children}
  </StyledLink>
);
