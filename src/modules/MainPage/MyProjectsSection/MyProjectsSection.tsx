import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import { LShapeDivider } from '@/components/atoms/LShapeDivider/LShapeDivider';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import Image from 'next/image';
import { FlexWrapper, LastProjectWrapper, StyledTextWrapper } from './MyProjectsSection.styles';
import projectDecoration from '../../../public/images/last-project-decoration.svg';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { buildURL } from '@/helpers/buildURL';
import { ProjectDataType } from '@/types/project';

const emptyProject: ProjectDataType = {
  projectMiniatureImgURL: '',
  projectName: '',
  projectDescription: {
    short: '',
    extended: [],
  },
  projectTechnologies: {
    main: [],
    all: [],
  },
  URLs: {
    gitHub: '',
    live: '',
  },
};

export const MyProjectsSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const [latestProject, setLatestProject] = useState<ProjectDataType>(emptyProject);

  useEffect(() => {
    (async () => {
      const response = await fetch(buildURL('/api/projects'));
      const projects: ProjectDataType[] = await response.json();

      setLatestProject(projects[0]);

      console.log(projects[0]);
    })();
  }, []);

  const {
    URLs: { live },
    projectDescription,
    projectMiniatureImgURL,
  } = latestProject;

  return (
    <MainPageSection id="my-projects" ref={ref}>
      <FlexWrapper>
        <StyledTextWrapper>
          <SectionHeading>Latest project</SectionHeading>
          <LShapeDivider />
          <FrameLink href={'/projects'}>Show more</FrameLink>
        </StyledTextWrapper>

        <LastProjectWrapper>
          <div className="decoration-wrapper">
            <Image src={projectDecoration} alt="yellow wavy shapes" fill />
          </div>
          <div className="content-wrapper">
            <div className="img-wrapper">{projectMiniatureImgURL && <Image src={projectMiniatureImgURL} alt="project thumbnail" fill />}</div>
            <p className="project-description">{projectDescription.short}</p>
            <a href={live} target="_blank">
              Live version
            </a>
          </div>
        </LastProjectWrapper>
      </FlexWrapper>
    </MainPageSection>
  );
});

MyProjectsSection.displayName = 'MyProjectsSection';
