import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import { ContactForm } from '../ContactForm/ContactForm';
import { FlexWrapper, IconsWrapper, StyledTextWrapper, StyledParagraph } from './ContactMeSection.styles';
import { ForwardedRef, forwardRef } from 'react';

export const ContactMeSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <MainPageSection id="contact-me" ref={ref}>
      <FlexWrapper>
        <StyledTextWrapper>
          <SectionHeading>Get in touch</SectionHeading>
          <DoubleLineDivider />
          <StyledParagraph>
            You will locate me on various online platforms, yet if you favor the traditional approach, feel free to send me a message.
          </StyledParagraph>

          <IconsWrapper>
            <div className="icon">
              <Link href="">
                <FaLinkedin />
              </Link>
            </div>
            <div className="icon">
              <Link href="">
                <FaGithub />
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
