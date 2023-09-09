'use client';
import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { Nav } from '@/components/molecules/Nav/Nav';
import { SideAnchors } from '@/components/molecules/SideAnchors/SideAnchors';
import { DottedLine } from '@/modules/MainPage/DottedLine/DottedLine';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { SlickWrapper } from '@/modules/MainPage/SlickWrapper/SlickWrapper';

const Page = () => {
  return (
    <>
      <SlickWrapper />
      <SideAnchors activeSection="#hello" />
      <Nav />
      <MainLogo />
      <GitHubLink />
      <DottedLine />
    </>
  );
};

export default Page;
