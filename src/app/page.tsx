'use client';
import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { NarrowScreenNav } from '@/components/molecules/NarrowScreenNav/NarrowScreenNav';
import { Nav } from '@/components/molecules/Nav/Nav';
import { useNavSpy } from '@/hooks/useNavSpy';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { MainPageSectionsWrapper } from '@/modules/MainPage/MainPageSectionsWrapper/MainPageSectionsWrapper';
import { RefObject, useRef } from 'react';

const Page = () => {
  const sectionsRefs: RefObject<HTMLElement>[] = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  const { activeSection } = useNavSpy(sectionsRefs);

  return (
    <div>
      <MainPageSectionsWrapper sectionsRefs={sectionsRefs} activeSection={activeSection} />
      <Nav activeSection={activeSection} />
      <NarrowScreenNav />
      <MainLogo />
      <GitHubLink />
    </div>
  );
};

export default Page;
