import { BackdropMenuListItem } from '@/components/atoms/BackdropMenuListItem/BackdropMenuListItem';
import { AnimatePresence } from 'framer-motion';
import { BackgroundText, StyledList, StyledMotionNav } from './BackdropMenu.styles';

const BackdropVariants = {
  hidden: { y: '-100%' },
  visible: { y: '0' },
  exit: { y: '-100%' },
};

type BackdropMenuProps = {
  isActive: boolean;
  handleToggleNavMenu: () => void;
};

export const BackdropMenu = ({ isActive, handleToggleNavMenu }: BackdropMenuProps) => {
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
        <StyledMotionNav
          key="backdrop"
          variants={BackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ ease: 'linear', duration: 0.3 }}
        >
          <BackgroundText>MENU</BackgroundText>
          <StyledList>
            {sections.map((section, index) => (
              <li key={index}>
                <BackdropMenuListItem
                  index={index}
                  section={section}
                  handleToggleNavMenu={handleToggleNavMenu}
                />
              </li>
            ))}
          </StyledList>
        </StyledMotionNav>
      )}
    </AnimatePresence>
  );
};
