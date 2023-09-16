import { useState } from 'react';
import { StyledInput, StyledLabel, StyledWrapper } from './ContactFormInput.styles';

type ContactFormInput = {
  label: string;
  type: 'text' | 'email';
};

export const ContactFormInput = ({ label, type }: ContactFormInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue) return;
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledWrapper>
      <StyledLabel className={isFocused ? 'label-float' : ''}>{label}</StyledLabel>
      <StyledInput
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
      />
    </StyledWrapper>
  );
};
