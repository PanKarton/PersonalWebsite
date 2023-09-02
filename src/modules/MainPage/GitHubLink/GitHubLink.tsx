import Image from 'next/image';
import gitHubIcon from 'public/images/gh-icon.svg';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  right: clamp(2rem, 4vw, 4rem);
  display: flex;
  flex-direction: column;

  .icon-wrapper {
    position: absolute;
    top: -3rem;
    left: 50%;
    translate: -50% 0;
    aspect-ratio: 1;
    width: 2rem;
  }

  .vertical-line {
    border-radius: 1rem;
    height: 3rem;
    width: 0.25rem;
    background-color: ${({ theme }) => theme.color.accentPrimary};
  }

  @media screen and (min-width: 37.5rem) {
    bottom: 4.75rem;

    .icon-wrapper {
      width: 2.25rem;
      top: -3.25rem;
    }
    .vertical-line {
      height: clamp(6rem, 15vw, 10rem);
      width: 0.25rem;
    }
  }
`;

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
