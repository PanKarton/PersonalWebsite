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
  StyledMotionDiv,
} from './ProjectDetailsModal.styles';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

const BackdropVariants = {
  hidden: { x: '100%' },
  visible: { x: '0' },
  exit: { x: '100%' },
};

type ProjectDetailsModalTypes = {
  projectDetails: ProjectDataType | null;
  handleCloseModal: () => void;
  isActive: boolean;
  modalAnimationTime: number;
};

export const ProjectDetailsModal = ({ projectDetails, handleCloseModal, isActive, modalAnimationTime }: ProjectDetailsModalTypes) => {
  const delayCloseModal = useCallback(() => {
    setTimeout(() => {
      handleCloseModal();
    }, modalAnimationTime - 200);
  }, []);

  useEffect(() => {
    const handleCloseModalByEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && e.type === 'keydown') {
        delayCloseModal();
      }
    };

    window.addEventListener('keydown', handleCloseModalByEsc);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleCloseModalByEsc);
      document.body.style.overflow = 'unset';
    };
  }, [handleCloseModal, delayCloseModal]);

  if (projectDetails === null) return null;

  const {
    projectName,
    projectDescription: { extended: projectDescription },
    projectMiniatureImgURL,
    projectTechnologies: { all: projectTechologies },
    URLs: { live, gitHub },
  } = projectDetails;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <StyledMotionDiv
          key="project"
          variants={BackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ ease: 'linear', duration: modalAnimationTime / 1000 }}>
          <StyledWrapper onClick={delayCloseModal}>
            <div className="content-wrapper" onClick={(e) => e.stopPropagation()}>
              <h4>{projectName}</h4>

              <StyledLineDivier />

              <div className="miniature-wrapper">
                <Image src={projectMiniatureImgURL} alt="project-miniature" fill />
              </div>

              <StyledLinksWrapper>
                <FrameLink href={live}>Live</FrameLink>
                <FrameLink href={gitHub}>GitHub</FrameLink>
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

              <StyledCloseButtonWrapper onClick={delayCloseModal}>
                <IoIosArrowRoundForward />
              </StyledCloseButtonWrapper>
            </div>
          </StyledWrapper>
        </StyledMotionDiv>
      )}
    </AnimatePresence>
  );
};
