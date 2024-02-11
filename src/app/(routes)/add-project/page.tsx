'use client';

import { ProjectDataType } from '@/types/project';
import { useState } from 'react';

const initProjectData: ProjectDataType[] = [
  {
    projectMiniatureImgURL: '',
    projectName: '',
    projectDescription: {
      short: '',
      extended: [],
    },
    projectTechnologies: {
      main: [],
      all: [],
    },
  },
];

const AddProjectPage = () => {
  const [projectData, setProjectData] = useState<ProjectDataType[]>(initProjectData);

  return (
    <div>
      <h1>Add project:</h1>
      <form>
        <input type="text" name="projectName" id="projectName" />
        <input type="text" name="projectDescriptionShort" id="projectDescriptionShort" />
        <input type="text" name="projectDescriptionExtended" id="projectDescriptionExtended" />
        <button type="submit">Add project</button>
      </form>

      <div className="project-details">
        <h2>Project details:</h2>
      </div>
    </div>
  );
};

export default AddProjectPage;
