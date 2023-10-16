import { RefObject, useEffect } from 'react';

export const useSetSideAnchorsStatic = (
  sideAnchorsRef: RefObject<HTMLUListElement>,
  footerRef: RefObject<HTMLElement>
) => {
  useEffect(() => {
    const sideAnchorsObserver = new IntersectionObserver(entries => {
      if (sideAnchorsRef.current === null) return;

      entries.forEach(({ isIntersecting }) => {
        sideAnchorsRef.current?.classList.toggle('static', isIntersecting);
      });
    });

    if (footerRef.current === null) return;

    sideAnchorsObserver.observe(footerRef.current);
  }, [sideAnchorsRef, footerRef]);
};
