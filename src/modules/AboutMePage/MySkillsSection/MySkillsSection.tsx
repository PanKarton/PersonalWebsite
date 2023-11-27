import { SkillTile } from '@/components/atoms/SkillTile/SkillTile';
import htmlIcon from 'public/images/html-skill-icon.svg';
import { ContentWrapper, StyledSection, StyledSkillsList } from './MySkillsSection.styles';

export const MySkillsSection = () => {
  const skills = [
    { img: htmlIcon, alt: 'Html icon', name: 'HTML' },
    { img: htmlIcon, alt: 'css icon', name: 'CSS3' },
    { img: htmlIcon, alt: 'javascript icon', name: 'JavaScript' },
    { img: htmlIcon, alt: 'typescript icon', name: 'TypeScript' },
    { img: htmlIcon, alt: 'react.js icon', name: 'React.js' },
    { img: htmlIcon, alt: 'next.js icon', name: 'Next.js' },
    { img: htmlIcon, alt: 'sass icon', name: 'SASS' },
    { img: htmlIcon, alt: 'styled components icon', name: 'Styled Components' },
    { img: htmlIcon, alt: 'redux icon', name: 'Redux' },
    { img: htmlIcon, alt: 'graphql icon', name: 'GraphQL' },
    { img: htmlIcon, alt: 'jest icon', name: 'Jest' },
    { img: htmlIcon, alt: 'npm icon', name: 'NPM' },
    { img: htmlIcon, alt: 'git icon', name: 'Git' },
    { img: htmlIcon, alt: 'figma icon', name: 'Figma' },
  ];

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
