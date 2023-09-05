import Image from 'next/image';
import gitHubIcon from 'public/images/gh-icon.svg';
import { StyledWrapper } from './GitHubLink.styles';

export const GitHubLink = () => {
  const URL = 'https://github.com/PanKarton';

  return (
    <StyledWrapper>
      <div className="icon-wrapper">
        <a href={URL} target="_blank">
          <Image src={gitHubIcon} alt="github icon" fill />
        </a>
      </div>
      <span className="vertical-line" />
    </StyledWrapper>
  );
};
