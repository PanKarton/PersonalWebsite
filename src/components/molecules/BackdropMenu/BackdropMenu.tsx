import { BackdropMenuListItem } from '@/components/atoms/BackdropMenuListItem/BackdropMenuListItem';
import { AnimatePresence } from 'framer-motion';
import { StyledList, StyledMotionDiv } from './BackdropMenu.styles';

const BackdropVariants = {
  hidden: { y: '-100%' },
  visible: { y: '0' },
  exit: { y: '-100%', transition: { delay: 0.5 } },
};

type BackdropMenuProps = {
  isActive: boolean;
};

export const BackdropMenu = ({ isActive }: BackdropMenuProps) => {
  const sections = [
    {
      id: '#hello',
      text: 'Home',
    },
    {
      id: '#about-me',
      text: 'About me',
    },
    {
      id: '#my-projects',
      text: 'My projects',
    },
    {
      id: '#contact-me',
      text: 'Contact me',
    },
  ];

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <StyledMotionDiv
          key="backdrop"
          variants={BackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ ease: 'linear', duration: 0.3 }}
        >
          <StyledList>
            {sections.map((section, index) => (
              <li key={index}>
                <BackdropMenuListItem index={index} section={section} />
              </li>
            ))}
          </StyledList>
        </StyledMotionDiv>
      )}
    </AnimatePresence>
  );
};
