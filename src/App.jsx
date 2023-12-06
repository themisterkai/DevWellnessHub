import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyColorPalette } from './helpers';
import { DesktopHomepage } from './pages/DesktopHomepage';
import { StartPage } from './pages/StartPage';
import './MasterStyle.css';

export const App = () => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const dispatch = useDispatch();
  const selectedPalette = useSelector((state) => state.settings.colorPalette);

  const handleSetupComplete = () => {
    setIsSetupComplete(true);
  };

  // always load data from local storage when we load the app
  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
  }, []);

  useEffect(() => {
    applyColorPalette(selectedPalette);
  }, [selectedPalette]);

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
