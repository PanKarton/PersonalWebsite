import { getEnvVariable } from './getEnvVariable';

export const buildURL = (path: string) => getEnvVariable(process.env.PAGE_URL) + path;
