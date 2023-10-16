import Link from 'next/link';
import Image from 'next/image';
import linkedInIcon from 'public/images/linkedin-icon.svg';
import gitHub from 'public/images/gh-icon-white.svg';
import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import { ContactForm } from '../ContactForm/ContactForm';
import {
  FlexWrapper,
  IconsWrapper,
  StyledTextWrapper,
  StyledParagraph,
} from './ContactMeSection.styles';
import { ForwardedRef, forwardRef } from 'react';

export const ContactMeSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <MainPageSection id="contact-me" ref={ref}>
      <FlexWrapper>
        <StyledTextWrapper>
          <SectionHeading>Get in touch</SectionHeading>
          <DoubleLineDivider />
          <StyledParagraph>
            You will locate me on various online platforms, yet if you favor the traditional
            approach, feel free to send me a message.
          </StyledParagraph>

          <IconsWrapper>
            <div className="icon">
              <Link href="">
                <Image src={linkedInIcon} alt="linkedIn icon" fill />
              </Link>
            </div>
            <div className="icon">
              <Link href="">
                <Image src={gitHub} alt="icon" fill />
              </Link>
            </div>
          </IconsWrapper>
          <StyledParagraph>arkadiusz.piersiak@gmail.com</StyledParagraph>
        </StyledTextWrapper>
        <ContactForm />
      </FlexWrapper>
    </MainPageSection>
  );
});

ContactMeSection.displayName = 'ContactMeSection';
