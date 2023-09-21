'use client';

import { ContactFormInput } from '../ContactFormInput/ContactFormInput';
import { ContactFormTextArea } from '../ContactFormTextArea/ContactFormTextArea';
import { AiOutlineClose } from 'react-icons/ai';
import {
  StyledSubmit,
  StyledForm,
  StyledCloseButton,
  StyledFormWrapper,
} from './ContactForm.styles';

type ContactFormProps = {
  handleClose: () => void;
  isOpen: boolean;
};

export const ContactForm = ({ handleClose, isOpen }: ContactFormProps) => {
  return (
    <StyledFormWrapper>
      <StyledForm>
        <ContactFormInput type="email" label="Your email" id="email" />
        <ContactFormTextArea label="how can I help you?" id="message" />

        <StyledSubmit>Send</StyledSubmit>
        <StyledCloseButton className="close-button" onClick={handleClose}>
          <AiOutlineClose />
        </StyledCloseButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};
