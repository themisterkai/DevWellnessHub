import { PropTypes } from 'prop-types';
import './Start.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateBreatheTimerLengthMS } from '../../reducers/settings';
import { useState } from 'react';

export const StartPageBreatheTimer = ({
  handleSubmitName,
  onSetupComplete,
}) => {
  const dispatch = useDispatch();
  const settingsState = useSelector(state => state.settings);

  const [breatheTimerLength, setBreatheTimerLength] = useState(
    settingsState.breatheTimerLengthMS / (60 * 1000) // convert milliseconds to minutes
  );

  const handleBreatheFocusTimerLength = () => {
    dispatch(
      updateBreatheTimerLengthMS({
        breatheTimerLengthMS: breatheTimerLength * 60 * 1000, // convert minutes to milliseconds
      })
    );
    handleSubmitName();
    onSetupComplete();
  };

  return (
    <div className="start-page">
      <header className="main-header"></header>
      <h1 className="secondary-header">
        Mindful breathing is a simple yet transformative practice that taps into
        the restorative potential of each breath.
        <p />
        How long do you want each break to be?
      </h1>
      <div className="start-page-input-wrapper">
        <input
          className="start-page-input"
          type="number"
          value={breatheTimerLength}
          min="1"
          onChange={e => {
            setBreatheTimerLength(e.target.value);
          }}
        ></input>
        <div className="start-page-button">
          <button
            className="app-button"
            onClick={handleBreatheFocusTimerLength}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

StartPageBreatheTimer.propTypes = {
  handleSubmitName: PropTypes.func.isRequired,
  onSetupComplete: PropTypes.func.isRequired,
};
