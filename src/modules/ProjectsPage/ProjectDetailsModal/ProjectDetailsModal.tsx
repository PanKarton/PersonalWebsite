import { ProjectDataType } from '@/types/project';
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
  projectDetails: ProjectDataType | null;
  handleCloseModal: () => void;
};

export const ProjectDetailsModal = ({
  projectDetails,
  handleCloseModal,
}: ProjectDetailsModalTypes) => {
  useEffect(() => {
    const handleCloseModalByEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && e.type === 'keydown') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleCloseModalByEsc);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleCloseModalByEsc);
      document.body.style.overflow = 'unset';
    };
  }, [handleCloseModal]);

  if (projectDetails === null) return null;

  const {
    projectName,
    projectDescription: { extended: projectDescription },
    projectMiniatureImgURL,
    projectTechnologies: { all: projectTechologies },
  } = projectDetails;

  return (
    <StyledWrapper onClick={handleCloseModal}>
      <div className="content-wrapper" onClick={e => e.stopPropagation()}>
        <h4>{projectName}</h4>

        <StyledLineDivier />

        <div className="miniature-wrapper">
          {!!projectMiniatureImgURL ?? (
            <Image src={projectMiniatureImgURL} alt="project-miniature" fill />
          )}
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
