import { ProjectDataProps } from '@/types/project';
import Image from 'next/image';
import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import {
  StyledLineDivier,
  StyledLinksWrapper,
  StyledTechList,
  StyledTechTile,
  StyledWrapper,
  StyledCloseButtonWrapper,
} from './ProjectDetailsModal.styles';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useEffect } from 'react';

type ProjectDetailsModalTypes = {
  projectDetails: ProjectDataProps | null;
  handleCloseModal: () => void;
};

export const ProjectDetailsModal = ({
  projectDetails,
  handleCloseModal,
}: ProjectDetailsModalTypes) => {
  if (projectDetails === null) return null;

  const {
    projectName,
    projectDescription: { extended: projectDescription },
    projectMiniatureImg,
    projectTechnologies: { all: projectTechologies },
  } = projectDetails;

  useEffect(() => {
    const handleCloseModalByEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && e.type === 'keydown') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleCloseModalByEsc);

    return () => window.removeEventListener('keydown', handleCloseModalByEsc);
  }, []);
  window;

  return (
    <StyledWrapper onClick={handleCloseModal}>
      <div className="content-wrapper" onClick={e => e.stopPropagation()}>
        <h4>{projectName}</h4>

        <StyledLineDivier />

        <div className="miniature-wrapper">
          <Image src={projectMiniatureImg} alt="project-miniature" fill />
        </div>

        <StyledLinksWrapper>
          <FrameLink href="/">Live</FrameLink>
          <FrameLink href="/">GitHub</FrameLink>
        </StyledLinksWrapper>

        <div className="description-wrapper">
          {projectDescription.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <h5>Technologies:</h5>

        <StyledTechList>
          {projectTechologies.map((tech, index) => (
            <li key={index}>
              <StyledTechTile>{tech}</StyledTechTile>
            </li>
          ))}
        </StyledTechList>

        <StyledCloseButtonWrapper onClick={handleCloseModal}>
          <IoIosArrowRoundForward />
        </StyledCloseButtonWrapper>
      </div>
    </StyledWrapper>
  );
};
