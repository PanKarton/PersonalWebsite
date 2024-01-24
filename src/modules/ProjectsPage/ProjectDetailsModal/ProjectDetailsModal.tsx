import styled from 'styled-components';
import { ProjectDataProps } from '@/types/project';
import Image from 'next/image';

type ProjectDetailsModalTypes = {
  projectDetails: ProjectDataProps | null;
};

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrastDarker};

  border-left: 1px solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
  z-index: 99999;

  .flex-wrapper {
    padding-inline: 2rem;

    h4 {
      color: ${({ theme }) => theme.color.accentPrimary};
      font-size: ${({ theme }) => theme.fontSize.text4XL};
      margin-block: 3rem;
      font-weight: 500;
    }

    .miniature-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 1.56;
      margin-bottom: 2rem;

      &::after {
        position: absolute;
        content: '';
        top: 0.5rem;
        right: -0.5rem;
        height: 100%;
        border-left: 2px solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
      }
      &::before {
        position: absolute;
        content: '';
        bottom: -0.5rem;
        right: -0.5rem;
        width: 100%;
        border-bottom: 2px solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
      }
    }

    .description {
      font-size: ${({ theme }) => theme.fontSize.textLG};
      letter-spacing: 1px;
    }
  }
`;

export const ProjectDetailsModal = ({ projectDetails }: ProjectDetailsModalTypes) => {
  if (projectDetails === null) return null;
  1;
  const { projectName, projectDescription, projectMiniatureImg, projectTechnologies } =
    projectDetails;

  return (
    <StyledWrapper>
      <div className="flex-wrapper">
        <h4>{projectName}</h4>
        <div className="miniature-wrapper">
          <Image src={projectMiniatureImg} alt="project-miniature" fill />
        </div>

        <p className="description">{projectDescription}</p>
      </div>
    </StyledWrapper>
  );
};
