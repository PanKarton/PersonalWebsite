import { ContactMeFormInputs } from '@/types/contact-me-form-inputs';
import { useEffect, useState } from 'react';
import { StyledInput, StyledLabel, StyledWrapper } from './ContactFormInput.styles';
import { UseFormRegister } from 'react-hook-form';

type ContactFormInput = {
  register: UseFormRegister<ContactMeFormInputs>;
};

export const ContactFormInput = ({ register }: ContactFormInput) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={'email'} className={isFocused ? 'label-float' : ''}>
        email
      </StyledLabel>
      <StyledInput
        id={'email'}
        type="email"
        {...register('email', {
          onBlur: (e) => {
            if (e.target.value) return;
            setIsFocused(false);
          },
        })}
        onFocus={handleFocus}
      />
    </StyledWrapper>
  );
};
