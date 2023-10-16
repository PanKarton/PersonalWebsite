import { Footer } from '@/components/atoms/Footer/Footer';
import { SideAnchors } from '@/components/molecules/SideAnchors/SideAnchors';
import { AboutMeSection } from '@/modules/MainPage/AboutMeSection/AboutMeSection';
import { ContactMeSection } from '@/modules/MainPage/ContactMeSection/ContactMeSection';
import { HelloSection } from '@/modules/MainPage/HelloSection/HelloSection';
import { MyProjectsSection } from '@/modules/MainPage/MyProjectsSection/MyProjectsSection';
import { RefObject, useEffect, useRef } from 'react';

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

  useEffect(() => {
    const sideAnchorsObserver = new IntersectionObserver(entries => {
      if (sideAnchorsRef.current === null) return;

      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          console.log('widac mnie');

          console.log(sideAnchorsRef?.current);
        } else {
          console.log('nie widac mnie');
        }
      });
    });

    if (footerRef.current === null) return;

    sideAnchorsObserver.observe(footerRef.current);
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      <HelloSection ref={sectionsRefs[0]} />
      <AboutMeSection ref={sectionsRefs[1]} />
      <MyProjectsSection ref={sectionsRefs[2]} />
      <ContactMeSection ref={sectionsRefs[3]} />
      <SideAnchors activeSection={activeSection} ref={sideAnchorsRef} />

      <Footer ref={footerRef} />
    </div>
  );
};
