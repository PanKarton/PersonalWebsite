import { ProjectDataType } from '@/types/project';
import Image from 'next/image';
import { StyledProjectTile, StyledTechList, StyledTechTile } from './ProjectTile.styles';

type ProjectTileProps = {
  projectData: ProjectDataType;
};

export const ProjectTile = ({ projectData }: ProjectTileProps) => {
  const {
    projectName,
    projectDescription: { short: projectDescription },
    projectMiniatureImgURL,
    projectTechnologies: { main: projectTechnologies },
  } = projectData;

  return (
    <StyledProjectTile>
      <div className="miniature-wrapper">
        <Image src={projectMiniatureImgURL} alt="project-miniature" fill />
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
};
