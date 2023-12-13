// useScreenSize.js
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIsMobile } from '../reducers/settings';

const useScreenSize = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 769;
      setIsMobile(newIsMobile);
      dispatch(updateIsMobile({ isMobile: newIsMobile }));
    };

    const handleOrientationChange = () => {
      // Use setTimeout to wait for a short period after orientation change
      setTimeout(() => {
        const newIsMobile = window.innerWidth <= 769;
        setIsMobile(newIsMobile);
        dispatch(updateIsMobile({ isMobile: newIsMobile }));
      }, 200);
    };

    // Initial setup
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    // Clean up the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [dispatch]);

  return { isMobile };
};

export default useScreenSize;
