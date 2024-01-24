import { ProjectDataProps } from '@/types/project';
import projectMiniatureImg from 'public/images/project-miniature-1.png';
import { useEffect, useState } from 'react';
import { ProjectTile } from '../ProjectTile/ProjectTile';
import { StyledList } from './ProjectsList.styles';

export const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState<ProjectDataProps[]>([]);

  useEffect(() => {
    const projects = [
      {
        projectMiniatureImg,
        projectName: 'Krasnystaw City Nursery',
        projectDescription: `A multi-page website connected to Strapi CMS, created for promotional purposes of the
        nursery and communication with parents`,
        projectTechnologies: ['Next.js', 'Strapi', 'styled-components', 'TypeScript'],
      },
      {
        projectMiniatureImg,
        projectName: 'Krasnystaw City Nursery',
        projectDescription: `A multi-page website connected to Strapi CMS, created for promotional purposes of the
        nursery and communication with parents`,
        projectTechnologies: ['Next.js', 'Strapi', 'styled-components', 'TypeScript'],
      },
      {
        projectMiniatureImg,
        projectName: 'Krasnystaw City Nursery',
        projectDescription: `A multi-page website connected to Strapi CMS, created for promotional purposes of the
        nursery and communication with parents`,
        projectTechnologies: ['Next.js', 'Strapi', 'styled-components', 'TypeScript'],
      },
      {
        projectMiniatureImg,
        projectName: 'Krasnystaw City Nursery',
        projectDescription: `A multi-page website connected to Strapi CMS, created for promotional purposes of the
        nursery and communication with parents`,
        projectTechnologies: ['Next.js', 'Strapi', 'styled-components', 'TypeScript'],
      },
      {
        projectMiniatureImg,
        projectName: 'Krasnystaw City Nursery',
        projectDescription: `A multi-page website connected to Strapi CMS, created for promotional purposes of the
        nursery and communication with parents`,
        projectTechnologies: ['Next.js', 'Strapi', 'styled-components', 'TypeScript'],
      },
    ];

    setProjectsData(projects);
  }, []);

  return (
    <StyledList>
      {projectsData &&
        projectsData.map(
          (
            { projectName, projectDescription, projectMiniatureImg, projectTechnologies },
            index
          ) => (
            <li key={index}>
              <ProjectTile
                projectName={projectName}
                projectDescription={projectDescription}
                projectMiniatureImg={projectMiniatureImg}
                projectTechnologies={projectTechnologies}
              />
            </li>
          )
        )}
    </StyledList>
  );
};
