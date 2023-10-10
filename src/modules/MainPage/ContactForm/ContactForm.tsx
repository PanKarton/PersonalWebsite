'use client';

import { ContactFormInput } from '../ContactFormInput/ContactFormInput';
import { ContactFormTextArea } from '../ContactFormTextArea/ContactFormTextArea';
import { StyledSubmit, StyledForm } from './ContactForm.styles';

export const ContactForm = () => {
  return (
    <StyledForm>
      <ContactFormInput id="email" label="email" type="email" />
      <ContactFormTextArea id="message" label="message" />
      <StyledSubmit>Send</StyledSubmit>
    </StyledForm>
  );
};
