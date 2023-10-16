import { Footer } from '@/components/atoms/Footer/Footer';
import { AboutMeSection } from '@/modules/MainPage/AboutMeSection/AboutMeSection';
import { ContactMeSection } from '@/modules/MainPage/ContactMeSection/ContactMeSection';
import { HelloSection } from '@/modules/MainPage/HelloSection/HelloSection';
import { MyProjectsSection } from '@/modules/MainPage/MyProjectsSection/MyProjectsSection';
import { RefObject } from 'react';

type MainPageSectionsWrapperProps = {
  sectionsRefs: RefObject<HTMLElement>[];
};

export const MainPageSectionsWrapper = ({ sectionsRefs }: MainPageSectionsWrapperProps) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <HelloSection ref={sectionsRefs[0]} />
      <AboutMeSection ref={sectionsRefs[1]} />
      <MyProjectsSection ref={sectionsRefs[2]} />
      <ContactMeSection ref={sectionsRefs[3]} />
      <Footer />
    </div>
  );
};
