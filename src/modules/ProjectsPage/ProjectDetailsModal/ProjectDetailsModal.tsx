import { ProjectDataProps } from '@/types/project';
import Image from 'next/image';
import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import {
  StyledLineDivier,
  StyledLinksWrapper,
  StyledTechList,
  StyledTechTile,
  StyledWrapper,
} from './ProjectDetailsModal.styles';

type ProjectDetailsModalTypes = {
  projectDetails: ProjectDataProps | null;
};

export const ProjectDetailsModal = ({ projectDetails }: ProjectDetailsModalTypes) => {
  if (projectDetails === null) return null;
  1;
  const {
    projectName,
    projectDescription: { extended: projectDescription },
    projectMiniatureImg,
    projectTechnologies: { all: projectTechologies },
  } = projectDetails;

  return (
    <StyledWrapper>
      <div className="flex-wrapper">
        <h4>{projectName}</h4>

        <StyledLineDivier />

        <div className="miniature-wrapper">
          <Image src={projectMiniatureImg} alt="project-miniature" fill />
        </div>

        <StyledLinksWrapper>
          <FrameLink href="/">Live</FrameLink>
          <FrameLink href="/">GitHub</FrameLink>
        </StyledLinksWrapper>

        <div className="description-wrapper">
          {projectDescription.map(paragraph => (
            <p>{paragraph}</p>
          ))}
        </div>

        <h5>Technologies:</h5>

        <StyledTechList>
          {projectTechologies.map((tech, index) => (
            <li key={index}>
              <StyledTechTile>{tech}</StyledTechTile>
            </li>
          ))}
        </StyledTechList>
      </div>
    </StyledWrapper>
  );
};
