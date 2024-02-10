import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema(
  {
    projectMiniatureImg: String,
    projectName: String,
    projectDescription: {
      short: String,
      extended: [{ type: String }],
    },
    projectTechnologies: {
      main: [{ type: String }],
      all: [{ type: String }],
    },
  },
  { collection: 'project' }
);

export const Project = mongoose.model('project', projectSchema);
