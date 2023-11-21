import { SkillTile } from '@/components/atoms/SkillTile/SkillTile';
import htmlIcon from 'public/images/html-skill-icon.svg';
import { ContentWrapper, StyledSection, StyledSkillsList } from './MySkillsSection.styles';

export const MySkillsSection = () => {
  const skills = [{ img: htmlIcon, alt: 'Html icon', name: 'HTML' }];

  return (
    <StyledSection>
      <ContentWrapper>
        <div className="heading-wrapper">
          <h2>THE TECHSTACK</h2>
          <p>I am most familiar with these - more being added</p>
        </div>
        <StyledSkillsList>
          {skills.map(({ img, alt, name }, index) => (
            <li key={index}>
              <SkillTile imgUrl={img} alt={alt} name={name} />
            </li>
          ))}
        </StyledSkillsList>
      </ContentWrapper>
    </StyledSection>
  );
};
