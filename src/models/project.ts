import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
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
});

export const Project = mongoose.model('Priject', projectSchema);
