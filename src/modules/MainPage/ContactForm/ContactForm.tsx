'use client';

import { ContactFormInput } from '../ContactFormInput/ContactFormInput';
import { ContactFormTextArea } from '../ContactFormTextArea/ContactFormTextArea';
import { StyledSubmit, StyledForm } from './ContactForm.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ContactMeFormInputs } from '@/types/contact-me-form-inputs';

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactMeFormInputs>();

  const onSubmit: SubmitHandler<ContactMeFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/* <ContactFormInput id="email" label="email" type="email" /> */}
      <ContactFormInput register={register} />
      <ContactFormTextArea register={register} />
      <StyledSubmit>Send</StyledSubmit>
    </StyledForm>
  );
};
