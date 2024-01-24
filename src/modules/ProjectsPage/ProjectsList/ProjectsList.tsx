import { Portal } from '@/components/atoms/Portal/Portal';
import { ProjectDataProps } from '@/types/project';
import projectMiniatureImg from 'public/images/project-miniature-1.png';
import { useEffect, useState } from 'react';
import { ProjectDetailsModal } from '../ProjectDetailsModal/ProjectDetailsModal';
import { ProjectTile } from '../ProjectTile/ProjectTile';
import { StyledList } from './ProjectsList.styles';

export const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState<ProjectDataProps[]>([]);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [currentProjectData, setCurrentProjectData] = useState<ProjectDataProps | null>(null);

  const handleOpenModal = (projectData: ProjectDataProps) => {
    setIsProjectModalOpen(true);
    setCurrentProjectData(projectData);
  };

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
    <>
      <StyledList>
        {projectsData &&
          projectsData.map(
            (
              { projectName, projectDescription, projectMiniatureImg, projectTechnologies },
              index
            ) => (
              <li
                key={index}
                onClick={() =>
                  handleOpenModal({
                    projectName,
                    projectDescription,
                    projectMiniatureImg,
                    projectTechnologies,
                  })
                }
              >
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
      <Portal isOpen={isProjectModalOpen}>
        <ProjectDetailsModal projectDetails={currentProjectData} />
      </Portal>
    </>
  );
};
