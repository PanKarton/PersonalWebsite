'use client';

import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.primary};
  height: 10vh;
  color: white;
`;

const Page = () => (
  <div>
    <StyledSection>HELLO</StyledSection>
    <StyledSection>ABOUT ME</StyledSection>
    <StyledSection>SKILLS</StyledSection>
    <StyledSection>PROJECTS</StyledSection>
    <StyledSection>CONTACT ME</StyledSection>
  </div>
);

export default Page;
