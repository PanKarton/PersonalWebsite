import Link from 'next/link';
import Image from 'next/image';
import linkedInIcon from 'public/images/linkedin-icon.svg';
import gitHub from 'public/images/gh-icon-white.svg';
import { BsEnvelope } from 'react-icons/bs';
import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import { ContactForm } from '../ContactForm/ContactForm';
import { FlexWrapper, IconsWrapper, StyledWrapper } from './ContactMeSection.styles';

export const ContactMeSection = () => (
  <MainPageSection id="contact-me">
    <FlexWrapper>
      <StyledWrapper>
        <SectionHeading>Get in touch</SectionHeading>
        <DoubleLineDivider />
        <SectionParagraph className="paragraph">arkadiusz.piersiak@gmail.com</SectionParagraph>

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
          <div className="icon icon--envelope">
            <BsEnvelope />
          </div>
        </IconsWrapper>
      </StyledWrapper>

      <div className="form-wrapper">
        <ContactForm />
      </div>
    </FlexWrapper>
  </MainPageSection>
);
