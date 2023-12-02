import { useState } from 'react';
import useScreenSize from "../hooks/useScreenSize";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateName,
  updateFocusTimerLengthMS,
  updateBreatheTimerLengthMS,
  factoryReset,
} from '../reducers/settings';

export const SettingsPage = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useDispatch();
  const settingsState = useSelector((state) => state.settings);

  // Local state variables to track changes
  const [name, setName] = useState(settingsState.name);
  const [focusTimerLength, setFocusTimerLength] = useState(
    settingsState.focusTimerLengthMS / (60 * 1000)
  );
  const [breatheTimerLength, setBreatheTimerLength] = useState(
    settingsState.breatheTimerLengthMS / (60 * 1000)
  );

  const handleFactoryReset = () => {
    dispatch(factoryReset());
    // You can also redirect the user to the StartPage here
  };

  const handleSaveChanges = () => {
    // Dispatch actions to update settings in the store
    dispatch(updateName({ name }));
    dispatch(updateFocusTimerLengthMS({ focusTimerLengthMS: focusTimerLength * 60 * 1000 }));
    dispatch(updateBreatheTimerLengthMS({ breatheTimerLengthMS: breatheTimerLength * 60 * 1000 }));
  };

  return (
    <div className="settings-wrapper">
      {isMobile && <Link to="/">Go to Dashboard</Link>}
      <div>
        Set Name:{' '}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        Set Focus Timer Length (minutes):{' '}
        <input
          type="number"
          value={focusTimerLength}
          min="1"
          onChange={(e) => setFocusTimerLength(e.target.value)}
        />
      </div>
      <div>
        Set Breathe Timer Length (minutes):{' '}
        <input
          type="number"
          value={breatheTimerLength}
          min="1"
          onChange={(e) => setBreatheTimerLength(e.target.value)}
        />
      </div>
      <div className="settings-buttons">
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={handleFactoryReset}>Factory Reset</button>
      </div>
    </div>
  );
};
