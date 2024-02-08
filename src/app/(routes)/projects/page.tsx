'use client';

import { SubPageLogoWrapper } from '@/components/atoms/SubPageLogoWrapper/SubPageLogoWrapper';
import { Footer } from '@/components/molecules/Footer/Footer';
import { ProjectsPageSection } from '@/modules/ProjectsPage/ProjectsPageSection/ProjectsPageSection';

const ProjectsPage = async () => {
  return (
    <div style={{ position: 'relative' }}>
      <ProjectsPageSection />
      <SubPageLogoWrapper subPage="projects" />

      <Footer isProjectsPage />
    </div>
  );
};

export default ProjectsPage;
