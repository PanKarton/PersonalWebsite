'use client';

import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { AboutMeSectionReversed } from '@/modules/AboutMePage/AboutMeSectionReversed/AboutMeSectionReversed';
import { BackArrowAnchor } from '@/modules/AboutMePage/BackArrowAnchor/BackArrowAnchor';
import { MeDescriptionSection } from '@/modules/AboutMePage/MeDescriptionSection/MeDescriptionSection';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { useState } from 'react';

const AboutMePage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <AboutMeSectionReversed />
      <MeDescriptionSection />

      <BackArrowAnchor />
      <MainLogo />
      <GitHubLink />
    </div>
  );
};

export default AboutMePage;
