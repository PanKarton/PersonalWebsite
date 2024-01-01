import { SlopingLinesDivier } from '@/components/atoms/SlopingLinesDivider/SlopingLinesDivider';
import { ProjectsList } from '../ProjectsList/ProjectsList';
import {
  StyledHeadingWrapper,
  StyledSection,
  StyledVerticalLine,
} from './ProjectsPageSection.styles';

export const ProjectsPageSection = () => (
  <StyledSection>
    <StyledHeadingWrapper>
      <div className="flex-wrapper">
        <h2>projects</h2>
        <SlopingLinesDivier />
        <p>
          Here are my works, from private to commercial, with an original perspective and full
          dedication that I put into them
        </p>
      </div>
    </StyledHeadingWrapper>

    <StyledVerticalLine />

    <div className="project-list-wrapper">
      <ProjectsList />
    </div>
  </StyledSection>
);
