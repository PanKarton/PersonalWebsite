'use client';

import { AboutMeLogoWrapper } from '@/modules/AboutMePage/AboutMeLogoWrapper/AboutMeLogoWrapper';
import { AboutMeSectionReversed } from '@/modules/AboutMePage/AboutMeSectionReversed/AboutMeSectionReversed';
import { MeDescriptionSection } from '@/modules/AboutMePage/MeDescriptionSection/MeDescriptionSection';
import { MySkillsSection } from '@/modules/AboutMePage/MySkillsSection/MySkillsSection';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { useRef } from 'react';

const AboutMePage = () => {
  const meDescriptionSectionRef = useRef<HTMLElement>(null);

  return (
    <div style={{ position: 'relative' }}>
      <AboutMeSectionReversed />
      <MeDescriptionSection ref={meDescriptionSectionRef} />
      <MySkillsSection />

      <AboutMeLogoWrapper />
      <GitHubLink />
    </div>
  );
};

export default AboutMePage;
