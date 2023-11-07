'use client';

import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { AboutMeSectionReversed } from '@/modules/AboutMePage/AboutMeSectionReversed/AboutMeSectionReversed';
import { BackArrowAnchor } from '@/modules/AboutMePage/BackArrowAnchor/BackArrowAnchor';
import { MeDescriptionSection } from '@/modules/AboutMePage/MeDescriptionSection/MeDescriptionSection';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';

const AboutMePage = () => (
  <div style={{ position: 'relative' }}>
    <AboutMeSectionReversed />
    <MeDescriptionSection />

    <BackArrowAnchor />
    <MainLogo />
    <GitHubLink />
  </div>
);

export default AboutMePage;
