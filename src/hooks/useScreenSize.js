// useScreenSize.js
//creating our own hook to manage the screenSize of a page and using to
//conditionally render the component needed.
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIsMobile } from '../reducers/settings';

const useScreenSize = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      dispatch(updateIsMobile({ isMobile: newIsMobile }));
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return { isMobile };
};

export default useScreenSize;
