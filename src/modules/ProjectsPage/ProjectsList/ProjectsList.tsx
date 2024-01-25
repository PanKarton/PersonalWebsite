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
        projectDescription: {
          short: `A multi-page website connected to Strapi CMS, created for promotional purposes of the
          nursery and communication with parents`,
          extended: [
            `My first commercial project involved developing a website for a daycare center, marking a captivating experience in working for a real client. This undertaking equipped me with invaluable problem-solving skills inherent in larger projects, and taught me how to adapt to specific client requirements.`,

            `Throughout the project, I configured the content management system, Strapi CMS, allowing easy content management for the daycare staff. Embracing this technology was pivotal in empowering the client to independently update the website's content.`,
          ],
        },

        projectTechnologies: {
          main: ['Next.js', 'Strapi', 'styled-components', 'TypeScript'],
          all: [
            'Next.js',
            'Strapi',
            'styled-components',
            'TypeScript',
            'Next.js',
            'Strapi',
            'styled-components',
            'TypeScript',
            'Next.js',
            'Strapi',
            'styled-components',
            'TypeScript',
          ],
        },
      },
    ];

    setProjectsData(projects);
  }, []);

  return (
    <>
      <StyledList>
        {projectsData &&
          projectsData.map((projectData, index) => (
            <li key={index} onClick={() => handleOpenModal(projectData)}>
              <ProjectTile projectData={projectData} />
            </li>
          ))}
      </StyledList>
      <Portal isOpen={isProjectModalOpen}>
        <ProjectDetailsModal projectDetails={currentProjectData} />
      </Portal>
    </>
  );
};
