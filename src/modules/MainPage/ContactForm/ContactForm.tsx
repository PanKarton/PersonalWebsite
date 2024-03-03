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

  const onSubmit: SubmitHandler<ContactMeFormInputs> = async () => {
    setFormStatus('SENDING');
    setTimeout(() => {
      setFormStatus('');
    }, 6000);
    try {
      setFormStatus('SUCCESS');
    } catch (error) {
      console.log(error);
      setFormStatus('ERROR');
    }
  };

  const renderButtonState = () => {
    switch (formStatus) {
      case 'SENDING':
        return <SpinningIcon />;
      case 'SUCCESS':
        return <AnimatedCheckmark />;
      default:
        return <span>Send</span>;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ContactFormInput register={register} />
      <ContactFormTextArea register={register} />
      <StyledSubmit disabled={isSubmitting}>{renderButtonState()}</StyledSubmit>
      {/* <StyledSubmit disabled={isSubmitting}>{<SpinningIcon />}</StyledSubmit> */}
      {errors.message && <StyledErrorMessage>{errors.message.message}</StyledErrorMessage>}
      {errors.email && <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>}
      {formStatus === 'ERROR' && <StyledErrorMessage>{`Oops, something went wrong :(`}</StyledErrorMessage>}
    </StyledForm>
  );
};
