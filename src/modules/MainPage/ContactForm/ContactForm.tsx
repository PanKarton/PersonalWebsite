'use client';

import { ContactFormInput } from '../ContactFormInput/ContactFormInput';
import { ContactFormTextArea } from '../ContactFormTextArea/ContactFormTextArea';
import { StyledSubmit, StyledForm, StyledErrorMessage } from './ContactForm.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ContactMeFormInputs } from '@/types/contact-me-form-inputs';
import { useState } from 'react';
import { SpinningIcon } from '@/components/atoms/SpinningIcon/SpinningIcon';
import { AnimatedCheckmark } from '@/components/atoms/AnimatedCheckmark/AnimatedCheckmark';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactMeFormInputs>({
    mode: 'onSubmit',
  });
  const [formStatus, setFormStatus] = useState<'SENDING' | 'SUCCESS' | 'ERROR' | ''>('');

  console.log('formStatus', formStatus);

  const onSubmit: SubmitHandler<ContactMeFormInputs> = async () => {
    setFormStatus('SENDING');
    try {
      setTimeout(() => {
        setFormStatus('SUCCESS');
        setFormStatus('');
      }, 3000);
    } catch (error) {
      setFormStatus('ERROR');
    }
  };

  const renderButtonState = () => {
    switch (formStatus) {
      case 'SENDING':
        return <SpinningIcon />;
      case 'SUCCESS':
        return <AnimatedCheckmark />;
      case 'ERROR':
        return <span>Error</span>;
      default:
        return <span>Send</span>;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ContactFormInput register={register} />
      <ContactFormTextArea register={register} />
      {/* <StyledSubmit disabled={isSubmitting}>{renderButtonState()}</StyledSubmit> */}
      <StyledSubmit disabled={isSubmitting}>{<SpinningIcon />}</StyledSubmit>1
      {errors.message && <StyledErrorMessage>{errors.message.message}</StyledErrorMessage>}
      {errors.email && <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>}
    </StyledForm>
  );
};
