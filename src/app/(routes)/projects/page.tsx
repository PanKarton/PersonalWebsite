'use client';

import { SubPageLogoWrapper } from '@/components/atoms/SubPageLogoWrapper/SubPageLogoWrapper';
import { Footer } from '@/components/molecules/Footer/Footer';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { ProjectsPageSection } from '@/modules/ProjectsPage/ProjectsPageSection/ProjectsPageSection';

const ProjectsPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <ProjectsPageSection />

      <SubPageLogoWrapper subPage="projects" />
      <Footer isAbsolute />
      <GitHubLink />
    </div>
  );
};

export default ProjectsPage;
