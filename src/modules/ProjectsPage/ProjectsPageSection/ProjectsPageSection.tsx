import { SlopingLinesDivier } from '@/components/atoms/SlopingLinesDivider/SlopingLinesDivider';
import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrast};

  display: grid;
  grid-template-columns: 45% 1fr;

  padding-top: 4rem;

  @media screen and (min-width: 30.25rem) {
    padding-top: 5rem;
  }
  @media screen and (min-width: 75rem) {
    padding-top: 5.5rem;
  }

  * {
    font-weight: 500;
  }
`;

export const StyledVerticalLine = styled.span`
  position: absolute;
  top: 25%;
  left: 45%;
  translate: -50% 0;
  height: 75%;
  width: 0.0625rem;
  background-color: ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;

  .flex-wrapper {
    display: flex;
    flex-direction: column;

    h2 {
      color: ${({ theme }) => theme.color.accentPrimary};
      font-size: ${({ theme }) => theme.fontSize.text5XL};
      margin-bottom: 0.25rem;
    }
    p {
      margin-top: 1.5rem;
      font-size: ${({ theme }) => theme.fontSize.textLG};
      max-width: 45ch;
      letter-spacing: 2px;
    }
  }
`;

export const ProjectsPageSection = () => (
  <StyledSection>
    <StyledHeadingWrapper>
      <div className="flex-wrapper">
        <h2>projects</h2>
        <SlopingLinesDivier />
        <p>
          Here are my works, from private to commercial, with an original perspective and full
          dedication that I put into them
        </p>
      </div>
    </StyledHeadingWrapper>

    <StyledVerticalLine />

    {/* <div>
      <ul>
        <li>
          <div>
            <span>img</span>
            <h3>Krasnystaw City Nursery</h3>
            <p>
              A multi-page website connected to Strapi CMS, created for promotional purposes of the
              nursery and communication with parents
            </p>
            <div>
              <ul>
                <li>
                  <div>Next.js</div>
                </li>
                <li>
                  <div>Strapi</div>
                </li>
                <li>
                  <div>styled-components</div>
                </li>
                <li>
                  <div>TypeScript</div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div> */}
  </StyledSection>
);
