import { getEnvVariable } from './getEnvVariable';

export const buildURL = (path?: string | undefined) => {
  const pageUrl =
    process.env.NODE_ENV === 'production'
      ? getEnvVariable(process.env.NEXT_PUBLIC_PAGE_URL_PROD)
      : getEnvVariable(process.env.NEXT_PUBLIC_PAGE_URL_DEV);
  return path ? pageUrl + path : pageUrl;
};
