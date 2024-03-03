'use client';

import { ContactFormInput } from '../ContactFormInput/ContactFormInput';
import { ContactFormTextArea } from '../ContactFormTextArea/ContactFormTextArea';
import { StyledSubmit, StyledForm, StyledErrorMessage } from './ContactForm.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ContactMeFormInputs } from '@/types/contact-me-form-inputs';
import { useState } from 'react';
import { SpinningIcon } from '@/components/atoms/SpinningIcon/SpinningIcon';
import { AnimatedCheckmark } from '@/components/atoms/AnimatedCheckmark/AnimatedCheckmark';
import { getEnvVariable } from '@/helpers/getEnvVariable';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactMeFormInputs>({
    mode: 'onSubmit',
  });
  const [formStatus, setFormStatus] = useState<'SENDING' | 'SUCCESS' | 'ERROR' | ''>('');

  const onSubmit: SubmitHandler<ContactMeFormInputs> = async (formData) => {
    const emailjsServiceID = getEnvVariable(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    const emailjsTemplateID = getEnvVariable(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    const emailjsUserID = getEnvVariable(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    setFormStatus('SENDING');
    setTimeout(() => {
      setFormStatus('');
    }, 6000);
    try {
      await emailjs.send(emailjsServiceID, emailjsTemplateID, formData, emailjsUserID);

      setFormStatus('SUCCESS');
      reset();
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
