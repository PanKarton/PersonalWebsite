'use client';
import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { Nav } from '@/components/molecules/Nav/Nav';
import { SideAnchors } from '@/components/molecules/SideAnchors/SideAnchors';
import { SlickWrapper } from '@/modules/MainPage/SlickWrapper/SlickWrapper';

const Page = () => {
  return (
    <>
      <SlickWrapper />
      <Nav />
      <SideAnchors activeSection="#hello" />
      <MainLogo />
    </>
  );
};

export default Page;
