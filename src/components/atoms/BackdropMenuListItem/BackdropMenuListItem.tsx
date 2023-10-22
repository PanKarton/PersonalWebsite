import { Line, StyledMotionDiv, Triangle } from './BackdropMenuListItem.styles';

type BackdropMenuListItemProps = {
  index: number;
  section: {
    id: string;
    text: string;
  };
};

const wrapperVariants = {
  initial: {
    x: 0,
  },
  hover: {
    x: -10,
    transition: { ease: 'linear', duration: 0.125 },
  },
};

const lineVariants = {
  hover: { width: '2.75rem', translateX: '-2.75rem', transition: { type: 'just' } },
};

export const BackdropMenuListItem = ({ index, section }: BackdropMenuListItemProps) => (
  <StyledMotionDiv variants={wrapperVariants} initial="initial" whileHover="hover" animate="rest">
    <span className="section-index">{`0${index}`}</span>
    <Triangle />
    <Line variants={lineVariants} />

    <a href={section.id}>{section.text}</a>
  </StyledMotionDiv>
);
