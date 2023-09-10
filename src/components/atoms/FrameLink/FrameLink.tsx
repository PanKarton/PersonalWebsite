import { StyledLink } from './FrameLink.styles';

type FrameLinkProps = {
  children: string;
  href: string;
};

export const FrameLink = ({ children, href }: FrameLinkProps) => {
  return (
    <StyledLink href={href}>
      <p>{children}</p>
    </StyledLink>
  );
};
