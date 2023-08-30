'use client';
import { Nav } from '@/components/molecules/Nav/Nav';
import { SlickWrapper } from '@/modules/MainPage/SlickWrapper/SlickWrapper';

const Page = () => {
  return (
    <>
      <Nav className={true ? 'isActive' : ''} />
      <SlickWrapper />
    </>
  );
};

export default Page;
