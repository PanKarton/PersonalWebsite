import { motion, AnimatePresence } from 'framer-motion';
import { StyledList, StyledMotionDiv } from './BackdropMenu.styles';

const BackdropVariants = {
  hidden: { y: '-100%' },
  visible: { y: '0' },
  exit: { y: '-100%', transition: { delay: 0.5 } },
};
const AnchorVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: (index + 1) * 0.05 + 0.3 },
  }),
  exit: (index: number) => ({ y: -10, opacity: 0, transition: { delay: index * -0.05 + 0.3 } }),
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
              <li key="index">
                <motion.a
                  href={section.id}
                  key="backdrop-anchor"
                  variants={AnchorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ ease: 'linear', duration: 0.1 }}
                  custom={index}
                >
                  {section.text}
                </motion.a>
              </li>
            ))}
          </StyledList>
        </StyledMotionDiv>
      )}
    </AnimatePresence>
  );
};
