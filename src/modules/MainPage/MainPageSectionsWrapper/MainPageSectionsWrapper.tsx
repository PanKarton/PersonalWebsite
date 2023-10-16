import { Footer } from '@/components/atoms/Footer/Footer';
import { SideAnchors } from '@/components/molecules/SideAnchors/SideAnchors';
import { AboutMeSection } from '@/modules/MainPage/AboutMeSection/AboutMeSection';
import { ContactMeSection } from '@/modules/MainPage/ContactMeSection/ContactMeSection';
import { HelloSection } from '@/modules/MainPage/HelloSection/HelloSection';
import { MyProjectsSection } from '@/modules/MainPage/MyProjectsSection/MyProjectsSection';
import { RefObject, useRef } from 'react';
import { StyledWrapper } from './MainPageSectionsWrapper.styles';
import { useSetSideAnchorsStatic } from './useSetSideAnchorsStatic';

type MainPageSectionsWrapperProps = {
  sectionsRefs: RefObject<HTMLElement>[];
  activeSection: string;
};

export const MainPageSectionsWrapper = ({
  sectionsRefs,
  activeSection,
}: MainPageSectionsWrapperProps) => {
  const sideAnchorsRef = useRef<HTMLUListElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useSetSideAnchorsStatic(sideAnchorsRef, footerRef);

  return (
    <StyledWrapper>
      <HelloSection ref={sectionsRefs[0]} />
      <AboutMeSection ref={sectionsRefs[1]} />
      <MyProjectsSection ref={sectionsRefs[2]} />
      <ContactMeSection ref={sectionsRefs[3]} />
      <SideAnchors activeSection={activeSection} ref={sideAnchorsRef} />

      <Footer ref={footerRef} />
    </StyledWrapper>
  );
};
