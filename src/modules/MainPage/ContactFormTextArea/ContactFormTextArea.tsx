import { useState } from 'react';
import { StyledLabel, StyledTextArea, StyledWrapper } from './ContactFormTextArea.styles';

type ContactFormInput = {
  label: string;
};

export const ContactFormTextArea = ({ label }: ContactFormInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue) return;
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledWrapper>
      <StyledLabel className={isFocused ? 'label-float' : ''}>{label}</StyledLabel>
      <StyledTextArea
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
      />
    </StyledWrapper>
  );
};
