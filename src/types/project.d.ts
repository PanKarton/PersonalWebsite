import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

export type ProjectDataProps = {
  projectMiniatureImg: string | StaticImageData;
  projectName: string;
  projectDescription: string;
  projectTechnologies: string[];
};
