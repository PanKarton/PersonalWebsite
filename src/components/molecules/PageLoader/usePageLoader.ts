import { log } from 'console';
import { useEffect, useState } from 'react';

export const usePageLoader = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 3900);
  }, []);

  return { isPageLoaded };
};
