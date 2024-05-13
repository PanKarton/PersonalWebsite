'use client';
import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { NarrowScreenNavWrapper } from '@/components/molecules/NarrowScreenNavWrapper/NarrowScreenNavWrapper';
import { Nav } from '@/components/molecules/Nav/Nav';
import { PageLoader } from '@/components/molecules/PageLoader/PageLoader';
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
    <>
      <PageLoader />

      <div>
        <MainPageSectionsWrapper sectionsRefs={sectionsRefs} activeSection={activeSection} />
        <Nav activeSection={activeSection} />
        <NarrowScreenNavWrapper />
        <MainLogo />
        <GitHubLink />
      </div>
    </>
  );
};

export default Page;
