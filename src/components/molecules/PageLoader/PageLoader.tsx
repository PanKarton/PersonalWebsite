import styles from './PageLoader.module.css';

import { usePageLoader } from './usePageLoader';

export const PageLoader = () => {
  const { isPageLoaded } = usePageLoader();
  const { loaderWrapper } = styles;

  console.log('isPageLoaded', isPageLoaded);

  if (isPageLoaded) return null;

  return <div className={loaderWrapper}></div>;
};
