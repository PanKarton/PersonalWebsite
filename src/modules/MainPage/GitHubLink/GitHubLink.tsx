import { useEffect, useRef, useState } from 'react';
import { StyledWrapper } from './GitHubLink.styles';
import { FaGithub } from 'react-icons/fa';

type GitHubLinkProps = {
  isAboutMePage?: boolean;
};

export const GitHubLink = ({ isAboutMePage }: GitHubLinkProps) => {
  const URL = 'https://github.com/PanKarton';
  const ref = useRef<HTMLDivElement | null>(null);
  const [isColorReversed, setIsColorReversed] = useState(false);

  useEffect(() => {
    if (!isAboutMePage) return;
    const handleScroll = () => {
      if (ref === null || !ref.current) return;
      const refHeight = ref.current.offsetHeight;
      const scrollPos = window.scrollY;

      setIsColorReversed(scrollPos > refHeight - 18);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledWrapper className={isColorReversed ? 'isColorReversed' : ''} ref={ref}>
      <div className="icon-wrapper">
        <a href={URL} target="_blank">
          <FaGithub />
        </a>
      </div>
      <span className="vertical-line" />
    </StyledWrapper>
  );
};
