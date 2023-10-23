import { Line, StyledMotionAnchor, Triangle } from './BackdropMenuListItem.styles';

type BackdropMenuListItemProps = {
  index: number;
  handleToggleNavMenu: () => void;
  section: {
    id: string;
    text: string;
  };
};

const wrapperVariants = {
  initial: {
    x: 0,
  },
  active: {
    x: -10,
    transition: { ease: 'linear', duration: 0.125 },
  },
};

const lineVariants = {
  active: {
    width: '2.75rem',
    translateX: '-2.75rem',
    transition: { ease: 'linear' },
  },
};
const triangleVariants = {
  initial: { scale: 0 },
  active: {
    scale: 1,
  },
};

export const BackdropMenuListItem = ({
  index,
  section,
  handleToggleNavMenu,
}: BackdropMenuListItemProps) => {
  const handleClick = () => {
    setTimeout(() => {
      handleToggleNavMenu();
    }, 300);
  };

  return (
    <StyledMotionAnchor
      variants={wrapperVariants}
      initial="initial"
      whileHover="active"
      whileTap="active"
      whileFocus="active"
      onClick={handleClick}
      href={section.id}
    >
      <span className="section-index">{`0${index}`}</span>
      <Triangle variants={triangleVariants} />
      <Line variants={lineVariants} />

      <span className="text">{section.text}</span>
    </StyledMotionAnchor>
  );
};
