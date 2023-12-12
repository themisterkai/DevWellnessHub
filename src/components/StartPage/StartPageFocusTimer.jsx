import { PropTypes } from 'prop-types';
import './Start.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFocusTimerLengthMS } from '../../reducers/settings';
import { useState } from 'react';

export const StartPageFocusTimer = ({ page, setPage }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const settingsState = useSelector(state => state.settings);

  const [focusTimerLength, setFocusTimerLength] = useState(
    settingsState.focusTimerLengthMS / (60 * 1000) // convert milliseconds to minutes
  );

  const validate = input => {
    if (input === '') {
      setError('Input required');
      return true;
    } else if (input === '0') {
      setError('Focus timer should be at least 1 min long');
      return true;
    } else if (parseInt(input) > 60) {
      setError('Focus timer should be 60 min or less');
      return true;
    }
    setError('');
    return false;
  };

  const handleKeyUp = e => {
    validate(e.target.value);
    if (e.key === 'Enter') {
      handleSetFocusTimerLength();
    }
  };

  const handleSetFocusTimerLength = () => {
    const hasError = validate(focusTimerLength);
    if (!hasError) {
      dispatch(
        updateFocusTimerLengthMS({
          focusTimerLengthMS: focusTimerLength * 60 * 1000, // convert minutes to milliseconds
        })
      );
      setPage(page + 1);
    }
  };

  return (
    <div className="start-page">
      <div className="start-page-wrapper">
        <header className="main-header"></header>
        <h1 className="secondary-header">
          A Focus Timer divides your work into manageable intervals, typically
          25 minutes.
          <p />
          How long do you want your Focus timer to be?
        </h1>
      </div>
      <div className="start-page-input-wrapper">
        <input
          className="start-page-input"
          type="number"
          aria-label="Focus Timer length"
          value={focusTimerLength}
          min="1"
          onKeyUp={handleKeyUp}
          onChange={e => {
            setFocusTimerLength(e.target.value);
          }}
        ></input>
        <div className="start-page-error">{error}</div>
        <div className="start-page-button">
          <button className="app-button" onClick={handleSetFocusTimerLength}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

StartPageFocusTimer.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
