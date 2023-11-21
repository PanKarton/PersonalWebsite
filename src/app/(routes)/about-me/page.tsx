'use client';

import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { useReverseColor } from '@/hooks/useReverseColor';
import { AboutMeSectionReversed } from '@/modules/AboutMePage/AboutMeSectionReversed/AboutMeSectionReversed';
import { BackArrowAnchor } from '@/modules/AboutMePage/BackArrowAnchor/BackArrowAnchor';
import { MeDescriptionSection } from '@/modules/AboutMePage/MeDescriptionSection/MeDescriptionSection';
import { MySkillsSection } from '@/modules/AboutMePage/MySkillsSection/MySkillsSection';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { useRef } from 'react';

const AboutMePage = () => {
  const meDescriptionSectionRef = useRef<HTMLElement>(null);

  const { isArrowColorReversed, isLogoColorReversed } = useReverseColor(meDescriptionSectionRef);

  return (
    <div style={{ position: 'relative' }}>
      <AboutMeSectionReversed />
      <MeDescriptionSection ref={meDescriptionSectionRef} />
      <MySkillsSection />

      <BackArrowAnchor isColorReversed={isArrowColorReversed} />
      <MainLogo isColorReversed={isLogoColorReversed} />
      <GitHubLink />
    </div>
  );
};

export default AboutMePage;
