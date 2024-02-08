import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import { LShapeDivider } from '@/components/atoms/LShapeDivider/LShapeDivider';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import Image from 'next/image';
import { FlexWrapper, LastProjectWrapper, StyledTextWrapper } from './MyProjectsSection.styles';
import projectImageURL from '../../../public/images/project-thumbnail.png';
import projectDecoration from '../../../public/images/last-project-decoration.svg';
import { ForwardedRef, forwardRef } from 'react';

export const MyProjectsSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const projectDescription =
    'Multi page website made with Next.js and connected to Strapi CMS for city nusery.';
  const projectURL = '';

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
            <div className="img-wrapper">
              <Image src={projectImageURL} alt="project thumbnail" fill />
            </div>
            <p className="project-description">{projectDescription}</p>
            <a href={projectURL}>Live version</a>
          </div>
        </LastProjectWrapper>
      </FlexWrapper>
    </MainPageSection>
  );
});

MyProjectsSection.displayName = 'MyProjectsSection';
