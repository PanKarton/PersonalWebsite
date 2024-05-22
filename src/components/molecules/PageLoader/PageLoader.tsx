import styles from './PageLoader.module.css';

import { usePageLoader } from './usePageLoader';

export const PageLoader = () => {
  const { isPageLoaded } = usePageLoader();
  const {
    loaderWrapper,
    container,
    box,
    wall,
    rightBottomWall,
    leftBottomWall,
    leftTopWall,
    rightTopWall,
    curtainWrapper,
    curtainLeft,
    curtainRight,
    curtainLeftSecond,
    curtainRightSecond,
  } = styles;

  if (isPageLoaded) return null;

  return (
    <div className={loaderWrapper}>
      <div className={container}>
        <div className={curtainWrapper}>
          <span className={curtainLeftSecond}></span>
          <span className={curtainRightSecond}></span>
          <span className={curtainLeft}></span>
          <span className={curtainRight}></span>
        </div>
        <div className={box}>
          <div className={`${wall} ${rightTopWall}`}></div>
          <div className={`${wall} ${leftBottomWall}`}></div>
          <div className={`${wall} ${leftTopWall}`}></div>
          <div className={`${wall} ${rightBottomWall}`}></div>
        </div>
      </div>
    </div>
  );
};
