import styles from './PageLoader.module.css';

import { usePageLoader } from './usePageLoader';

export const PageLoader = () => {
  const { isPageLoaded } = usePageLoader();
  const {
    loaderWrapper,
    shapeWrapper,
    wall,
    rightBottomWall,
    leftBottomWall,
    leftTopWall,
    rightTopWall,
    flap,
    rightTopFlap,
    leftTopFlap,
    leftBottomFlap,
    rightBottomFlap,
  } = styles;

  // if (isPageLoaded) return null;

  return (
    <div className={loaderWrapper}>
      <div className={shapeWrapper}>
        <div className={`${wall} ${leftTopWall}`}></div>
        <div className={`${wall} ${rightTopWall}`}></div>
        <div className={`${wall} ${rightBottomWall}`}></div>
        <div className={`${wall} ${leftBottomWall}`}></div>

        <div className={`${flap} ${rightTopFlap}`}></div>
        <div className={`${flap} ${leftTopFlap}`}></div>
        <div className={`${flap} ${leftBottomFlap}`}></div>
        <div className={`${flap} ${rightBottomFlap}`}></div>
      </div>
    </div>
  );
};
