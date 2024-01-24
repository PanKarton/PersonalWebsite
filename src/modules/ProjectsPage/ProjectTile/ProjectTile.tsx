import { ProjectDataProps } from '@/types/project';
import Image from 'next/image';
import { StyledProjectTile, StyledTechList, StyledTechTile } from './ProjectTile.styles';

export const ProjectTile = ({
  projectMiniatureImg,
  projectName,
  projectDescription,
  projectTechnologies,
}: ProjectDataProps) => (
  <StyledProjectTile>
    <div className="miniature-wrapper">
      <Image src={projectMiniatureImg} alt="project-miniature" fill />
    </div>
    <h3>{projectName}</h3>
    <p>{projectDescription}</p>
    <div className="tech-list-wrapper">
      <StyledTechList>
        {projectTechnologies.map((tech, index) => (
          <li key={index}>
            <StyledTechTile>{tech}</StyledTechTile>
          </li>
        ))}
      </StyledTechList>
    </div>
  </StyledProjectTile>
);
