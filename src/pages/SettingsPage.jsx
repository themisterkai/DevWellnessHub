import { useState } from 'react';
import { MobileToDashBTN } from '../components/MobileToDashBTN'
import { useDispatch, useSelector } from 'react-redux';
import {
  updateName,
  updateFocusTimerLengthMS,
  updateBreatheTimerLengthMS,
  factoryReset,
} from '../reducers/settings';
import { resetFactoryBreatheTimer } from '../reducers/breatheTimer';
import { resetFactoryFocusTimer } from '../reducers/focusTimer';
import { resetMood } from '../reducers/mood';
import { resetHabits } from '../reducers/habits';
import { resetHistorical } from '../reducers/historical';
import './SettingsPage.css'

export const SettingsPage = () => {
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
    dispatch(resetFactoryBreatheTimer());
    dispatch(resetFactoryFocusTimer());
    dispatch(resetMood());
    dispatch(resetHabits());
    dispatch(resetHistorical());
    // You can also redirect the user to the StartPage here
    //window.location.href = '/start';
  };

  const handleSaveChanges = () => {
    // Dispatch actions to update settings in the store
    dispatch(updateName({ name }));
    dispatch(updateFocusTimerLengthMS({ focusTimerLengthMS: focusTimerLength * 60 * 1000 }));
    dispatch(updateBreatheTimerLengthMS({ breatheTimerLengthMS: breatheTimerLength * 60 * 1000 }));
  };

  return (
    <div className="main-wrapper">
      <div className="app-container">
        <header className="main-header">
          <div className="main-app-name">Your settings</div>
        </header>
        <h2 className="secondary-header">Adjust with your needs:</h2>
      <p className="text-paragraph settings-description">Change your name, set Focus Timer length (minutes) and Breathe Timer length (minutes).</p>
      <div className="settings-field-wrapper">
      <div className="field-wrap">
      <div className="text-paragraph">Name:</div>
      <div className="text-paragraph">Focus:</div>
      <div className="text-paragraph">Breathe:</div>
      </div>
      <div className="field-wrap">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="settings-input-field"
        />
        <input
          type="number"
          value={focusTimerLength}
          min="1"
          onChange={(e) => setFocusTimerLength(e.target.value)}
          className="settings-input-field"
        />
        <input
          type="number"
          value={breatheTimerLength}
          min="1"
          onChange={(e) => setBreatheTimerLength(e.target.value)}
          className="settings-input-field"
        />
      </div>
      </div>
      <div className="settings-buttons-wrapper">
      <button className="app-button" onClick={handleSaveChanges}>Save Changes</button>
      <button className="app-button" onClick={handleFactoryReset}>Factory Reset</button>
      </div>
      <MobileToDashBTN />
      </div>
    </div>
  );
};
