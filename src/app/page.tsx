'use client';
import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { Nav } from '@/components/molecules/Nav/Nav';
import { SideAnchors } from '@/components/molecules/SideAnchors/SideAnchors';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { MainPageSectionsWrapper } from '@/modules/MainPage/MainPageSectionsWrapper/MainPageSectionsWrapper';

const Page = () => {
  return (
    <div>
      <MainPageSectionsWrapper />
      <SideAnchors activeSection="#hello" />
      <Nav />
      <MainLogo />
      <GitHubLink />
    </div>
  );
};

export default Page;
