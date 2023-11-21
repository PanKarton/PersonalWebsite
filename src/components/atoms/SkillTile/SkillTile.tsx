import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { StyledWrapper } from './SkillTile.styles';

type SkillTileProps = {
  name: string;
  imgUrl: string | StaticImport;
  alt: string;
};

export const SkillTile = ({ name, alt, imgUrl }: SkillTileProps) => (
  <StyledWrapper>
    <div className="skill-icon">
      <Image src={imgUrl} alt={alt} fill />
    </div>
    <span>{name}</span>
  </StyledWrapper>
);
