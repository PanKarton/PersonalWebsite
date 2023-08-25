'use client';
import { AboutMeSection } from '@/modules/AboutMeSection/AboutMeSection';
import { ContactMeSection } from '@/modules/ContactMeSection/ContactMeSection';
import { HelloSection } from '@/modules/HelloSection/HelloSection';
import { MyProjectsSection } from '@/modules/MyProjectsSection/MyPRojectsSection';
import { SkillsSection } from '@/modules/SkillsSection/SkillsSection';

const Page = () => (
  <>
    <HelloSection />
    <AboutMeSection />
    <SkillsSection />
    <MyProjectsSection />
    <ContactMeSection />
  </>
);

export default Page;
