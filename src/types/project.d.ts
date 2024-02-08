import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

export type ProjectDataType = {
  projectMiniatureImg: string | StaticImageData;
  projectName: string;
  projectDescription: {
    short: string;
    extended: string[];
  };
  projectTechnologies: {
    main: string[];
    all: string[];
  };
};
