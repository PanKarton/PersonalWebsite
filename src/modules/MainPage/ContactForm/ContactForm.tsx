import { ContactFormInput } from '../ContactFormInput/ContactFormInput';
import { ContactFormTextArea } from '../ContactFormTextArea/ContactFormTextArea';
import { StyledButton, StyledForm } from './ContactForm.styles';

export const ContactForm = () => (
  <StyledForm>
    <ContactFormInput type="text" label="name" />
    <ContactFormInput type="email" label="email" />
    <ContactFormTextArea label="message" />

    <StyledButton>Send</StyledButton>
  </StyledForm>
);
