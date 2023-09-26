import { AboutMeSection } from '@/modules/MainPage/AboutMeSection/AboutMeSection';
import { ContactMeSection } from '@/modules/MainPage/ContactMeSection/ContactMeSection';
import { HelloSection } from '@/modules/MainPage/HelloSection/HelloSection';
import { MyProjectsSection } from '@/modules/MainPage/MyProjectsSection/MyProjectsSection';
import { SkillsSection } from '@/modules/MainPage/SkillsSection/SkillsSection';

export const MainPageSectionsWrapper = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <HelloSection />
      <AboutMeSection />
      {/* <MyProjectsSection /> */}
      {/* <ContactMeSection /> */}
    </div>
  );
};
