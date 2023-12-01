import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DesktopHomepage } from './pages/DesktopHomepage';
import { StartPage } from './pages/StartPage';

export const App = () => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const dispatch = useDispatch();

  const handleSetupComplete = () => {
    setIsSetupComplete(true);
  };

  // always load data from local storage when we load the app
  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
  }, []);

  return (
    <div>
      {isSetupComplete ? (
        <DesktopHomepage />
      ) : (
        <StartPage onSetupComplete={handleSetupComplete} />
      )}
    </div>
  );
};
