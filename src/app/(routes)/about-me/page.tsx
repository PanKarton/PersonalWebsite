'use client';

import { SubPageLogoWrapper } from '@/components/atoms/SubPageLogoWrapper/SubPageLogoWrapper';
import { Footer } from '@/components/molecules/Footer/Footer';
import { AboutMeSectionReversed } from '@/modules/AboutMePage/AboutMeSectionReversed/AboutMeSectionReversed';
import { MeDescriptionSection } from '@/modules/AboutMePage/MeDescriptionSection/MeDescriptionSection';
import { MySkillsSection } from '@/modules/AboutMePage/MySkillsSection/MySkillsSection';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';

const AboutMePage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <AboutMeSectionReversed />
      <MeDescriptionSection />
      <MySkillsSection />
      <Footer isColorReversed />

      <SubPageLogoWrapper subPage="about-me" />
      <GitHubLink isAboutMePage />
    </div>
  );
};

export default AboutMePage;
