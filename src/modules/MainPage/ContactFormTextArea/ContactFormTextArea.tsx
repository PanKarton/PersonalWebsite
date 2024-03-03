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
          required: {
            value: true,
            message: 'Come on, write something to me!',
          },
          maxLength: {
            value: 200,
            message: 'Reached the maximum message character limit of 200',
          },
        })}
        onFocus={handleFocus}
      />
    </StyledWrapper>
  );
};
