'use client';
import { Nav } from '@/components/molecules/Nav/Nav';
import { SideAnchors } from '@/components/molecules/SideAnchors/SideAnchors';
import { SlickWrapper } from '@/modules/MainPage/SlickWrapper/SlickWrapper';

const Page = () => {
  return (
    <>
      <SlickWrapper />
      <Nav />
      <SideAnchors activeSection="#hello" />
    </>
  );
};

export default Page;
