'use client';
import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { Nav } from '@/components/molecules/Nav/Nav';
import { SideAnchors } from '@/components/molecules/SideAnchors/SideAnchors';
import { useNavSpy } from '@/hooks/useNavSpy';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { MainPageSectionsWrapper } from '@/modules/MainPage/MainPageSectionsWrapper/MainPageSectionsWrapper';

const Page = () => {
  const { activeSection } = useNavSpy();

  return (
    <div>
      <MainPageSectionsWrapper />
      <SideAnchors activeSection={activeSection} />
      <Nav activeSection={activeSection} />
      <MainLogo />
      <GitHubLink />
    </div>
  );
};

export default Page;
