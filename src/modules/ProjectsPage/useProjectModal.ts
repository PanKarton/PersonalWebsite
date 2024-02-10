import { ProjectDataType } from '@/types/project';
import { useState } from 'react';

export const useProjectModal = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [currentProjectData, setCurrentProjectData] = useState<ProjectDataType | null>(null);

  const handleOpenModal = (projectData: ProjectDataType) => {
    setIsProjectModalOpen(true);
    setCurrentProjectData(projectData);
  };

  const handleCloseModal = () => {
    setIsProjectModalOpen(false);
    setCurrentProjectData(null);
  };

  return {
    isProjectModalOpen,
    currentProjectData,
    handleCloseModal,
    handleOpenModal,
  };
};
