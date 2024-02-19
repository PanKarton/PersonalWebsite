import { useState } from 'react';
import { StyledLabel, StyledTextArea, StyledWrapper } from './ContactFormTextArea.styles';
import { UseFormRegister } from 'react-hook-form';
import { ContactMeFormInputs } from '@/types/contact-me-form-inputs';

type ContactFormInput = {
  register: UseFormRegister<ContactMeFormInputs>;
};

export const ContactFormTextArea = ({ register }: ContactFormInput) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={'message'} className={isFocused ? 'label-float' : ''}>
        message
      </StyledLabel>
      <StyledTextArea
        id="message"
        {...register('message', {
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
