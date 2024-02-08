import { Portal } from '@/components/atoms/Portal/Portal';
import { ProjectDataType } from '@/types/project';
import { useEffect, useState } from 'react';
import { ProjectDetailsModal } from '../ProjectDetailsModal/ProjectDetailsModal';
import { ProjectTile } from '../ProjectTile/ProjectTile';
import { useProjectModal } from '../useProjectModal';
import { StyledList } from './ProjectsList.styles';
import { buildURL } from '@/helpers/buildURL';

export const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState<ProjectDataType[]>([]);
  const { currentProjectData, handleCloseModal, handleOpenModal, isProjectModalOpen } =
    useProjectModal();

  useEffect(() => {
    (async () => {
      const response = await fetch(buildURL('/api/projects'));
      const projects: ProjectDataType[] = await response.json();

      console.log(projects);

      setProjectsData(projects);
    })();
  }, []);

  return (
    <>
      {/* <StyledList>
        {projectsData &&
          projectsData.map((projectData, index) => (
            <li key={index} onClick={() => handleOpenModal(projectData)}>
              <ProjectTile projectData={projectData} />
            </li>
          ))}
      </StyledList>
      <Portal isOpen={isProjectModalOpen}>
        <ProjectDetailsModal
          projectDetails={currentProjectData}
          handleCloseModal={handleCloseModal}
        />
      </Portal> */}
    </>
  );
};
