import { useState } from 'react';

import { DesktopHomepage } from './pages/DesktopHomepage';
import { StartPage } from './pages/StartPage';

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
