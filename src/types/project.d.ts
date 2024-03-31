import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

export type ProjectDataType = {
  projectMiniatureImgURL: string;
  projectName: string;
  projectDescription: {
    short: string;
    extended: string[];
  };
  projectTechnologies: {
    main: string[];
    all: string[];
  };
  URLs: {
    live: string;
    gitHub: string;
  };
};
