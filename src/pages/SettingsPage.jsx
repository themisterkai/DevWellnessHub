import { useDispatch, useSelector } from 'react-redux';
import { factoryReset } from '../reducers/settings';

export const SettingsPage = () => {
  const dispatch = useDispatch();
  //const settingsState = useSelector(state => state.settings);

  const handleFactoryReset = () => {
    dispatch(factoryReset());
    // You can also redirect the user to the StartPage here
  };

  return (
    <div className="settings-wrapper">
      {/* Settings controls go here */}

      <button onClick={handleFactoryReset}>Factory Reset</button>
    </div>
  );
};
