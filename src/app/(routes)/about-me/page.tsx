'use client';

import { Footer } from '@/components/molecules/Footer/Footer';
import { AboutMeLogoWrapper } from '@/modules/AboutMePage/AboutMeLogoWrapper/AboutMeLogoWrapper';
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

      <AboutMeLogoWrapper />
      <GitHubLink isAboutMePage />
    </div>
  );
};

export default AboutMePage;
