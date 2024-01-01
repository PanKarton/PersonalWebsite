import { SlopingLinesDivier } from '@/components/atoms/SlopingLinesDivider/SlopingLinesDivider';
import {
  StyledHeadingWrapper,
  StyledSection,
  StyledVerticalLine,
} from './ProjectsPageSection.styles';

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

    <div>
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
    </div>
  </StyledSection>
);
