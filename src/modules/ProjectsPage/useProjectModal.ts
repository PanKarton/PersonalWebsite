import { ProjectDataType } from '@/types/project';
import { useState } from 'react';

export const useProjectModal = (time: number) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [currentProjectData, setCurrentProjectData] = useState<ProjectDataType | null>(null);

  const handleOpenModal = (projectData: ProjectDataType) => {
    setIsProjectModalOpen(true);
    setCurrentProjectData(projectData);
  };

  const handleCloseModal = () => {
    setIsProjectModalOpen(false);
    setTimeout(() => {
      setCurrentProjectData(null);
    }, time);
  };

  return {
    isProjectModalOpen,
    currentProjectData,
    handleCloseModal,
    handleOpenModal,
  };
};
