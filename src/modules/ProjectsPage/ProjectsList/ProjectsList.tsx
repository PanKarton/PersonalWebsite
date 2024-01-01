import Image from 'next/image';
import projectMiniatureImage from 'public/images/project-miniature-1.png';
import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: 62.5rem) {
    overflow-y: auto;
    height: 75vh;
    padding-right: 2rem;

    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
      border-radius: 99rem;

      &:hover {
        background-color: ${({ theme }) => theme.color.primaryLighter};
      }
    }
  }
`;

export const StyledProjectTile = styled.div`
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: background-color 125ms ease-in-out;

  h3 {
    color: ${({ theme }) => theme.color.accentPrimary};
    font-size: ${({ theme }) => theme.fontSize.text2XL};
    margin-block: 0.5rem;
  }

  .miniature-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1.56;
    margin-bottom: 0.5rem;
    border: 0.75rem solid ${({ theme }) => theme.color.primarySlightlyLighter};
    transition: border-color 125ms ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.primarySlightlyLighter};

    .miniature-wrapper {
      border-color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.75rem;
  margin-top: 1rem;
`;

export const StyledTechTile = styled.div`
  border: 1px solid ${({ theme }) => theme.color.accentPrimary};
  border-radius: 999rem;
  padding: 0.375rem 0.75rem;
`;

export const ProjectsList = () => (
  <StyledList>
    <li>
      <StyledProjectTile>
        <div className="miniature-wrapper">
          <Image src={projectMiniatureImage} alt="project-miniature" fill />
        </div>
        <h3>Krasnystaw City Nursery</h3>
        <p>
          A multi-page website connected to Strapi CMS, created for promotional purposes of the
          nursery and communication with parents
        </p>
        <div>
          <StyledTechList>
            <li>
              <StyledTechTile>Next.js</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>Strapi</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>styled-components</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>TypeScript</StyledTechTile>
            </li>
          </StyledTechList>
        </div>
      </StyledProjectTile>
    </li>
    <li>
      <StyledProjectTile>
        <div className="miniature-wrapper">
          <Image src={projectMiniatureImage} alt="project-miniature" fill />
        </div>
        <h3>Krasnystaw City Nursery</h3>
        <p>
          A multi-page website connected to Strapi CMS, created for promotional purposes of the
          nursery and communication with parents
        </p>
        <div>
          <StyledTechList>
            <li>
              <StyledTechTile>Next.js</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>Strapi</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>styled-components</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>TypeScript</StyledTechTile>
            </li>
          </StyledTechList>
        </div>
      </StyledProjectTile>
    </li>
    <li>
      <StyledProjectTile>
        <div className="miniature-wrapper">
          <Image src={projectMiniatureImage} alt="project-miniature" fill />
        </div>
        <h3>Krasnystaw City Nursery</h3>
        <p>
          A multi-page website connected to Strapi CMS, created for promotional purposes of the
          nursery and communication with parents
        </p>
        <div>
          <StyledTechList>
            <li>
              <StyledTechTile>Next.js</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>Strapi</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>styled-components</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>TypeScript</StyledTechTile>
            </li>
          </StyledTechList>
        </div>
      </StyledProjectTile>
    </li>
    <li>
      <StyledProjectTile>
        <div className="miniature-wrapper">
          <Image src={projectMiniatureImage} alt="project-miniature" fill />
        </div>
        <h3>Krasnystaw City Nursery</h3>
        <p>
          A multi-page website connected to Strapi CMS, created for promotional purposes of the
          nursery and communication with parents
        </p>
        <div>
          <StyledTechList>
            <li>
              <StyledTechTile>Next.js</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>Strapi</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>styled-components</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>TypeScript</StyledTechTile>
            </li>
          </StyledTechList>
        </div>
      </StyledProjectTile>
    </li>
    <li>
      <StyledProjectTile>
        <div className="miniature-wrapper">
          <Image src={projectMiniatureImage} alt="project-miniature" fill />
        </div>
        <h3>Krasnystaw City Nursery</h3>
        <p>
          A multi-page website connected to Strapi CMS, created for promotional purposes of the
          nursery and communication with parents
        </p>
        <div>
          <StyledTechList>
            <li>
              <StyledTechTile>Next.js</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>Strapi</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>styled-components</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>TypeScript</StyledTechTile>
            </li>
          </StyledTechList>
        </div>
      </StyledProjectTile>
    </li>
    <li>
      <StyledProjectTile>
        <div className="miniature-wrapper">
          <Image src={projectMiniatureImage} alt="project-miniature" fill />
        </div>
        <h3>Krasnystaw City Nursery</h3>
        <p>
          A multi-page website connected to Strapi CMS, created for promotional purposes of the
          nursery and communication with parents
        </p>
        <div>
          <StyledTechList>
            <li>
              <StyledTechTile>Next.js</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>Strapi</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>styled-components</StyledTechTile>
            </li>
            <li>
              <StyledTechTile>TypeScript</StyledTechTile>
            </li>
          </StyledTechList>
        </div>
      </StyledProjectTile>
    </li>
  </StyledList>
);
