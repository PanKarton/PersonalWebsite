import { ReactNode } from 'react';
import { AboutMeSection } from '@/modules/MainPage/AboutMeSection/AboutMeSection';
import { ContactMeSection } from '@/modules/MainPage/ContactMeSection/ContactMeSection';
import { HelloSection } from '@/modules/MainPage/HelloSection/HelloSection';
import { MyProjectsSection } from '@/modules/MainPage/MyProjectsSection/MyProjectsSection';
import { SkillsSection } from '@/modules/MainPage/SkillsSection/SkillsSection';

export const SlickWrapper = () => {
  return (
    <div>
      <HelloSection />
      <AboutMeSection />
      <SkillsSection />
      <MyProjectsSection />
      <ContactMeSection />
    </div>
  );
};
