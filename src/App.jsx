import { useState } from 'react';
import { StartPage } from './pages/StartPage';
import { DesktopHomepage } from './pages/DesktopHomepage';

export const App = () => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const handleSetupComplete = () => {
    setIsSetupComplete(true);
  };

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
