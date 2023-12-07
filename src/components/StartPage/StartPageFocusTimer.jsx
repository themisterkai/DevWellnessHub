import { PropTypes } from 'prop-types';
import './Start.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFocusTimerLengthMS } from '../../reducers/settings';
import { useState } from 'react';

export const StartPageFocusTimer = ({ page, setPage }) => {
  const dispatch = useDispatch();
  const settingsState = useSelector(state => state.settings);

  const [focusTimerLength, setFocusTimerLength] = useState(
    settingsState.focusTimerLengthMS / (60 * 1000) // convert milliseconds to minutes
  );

  const handleSetFocusTimerLength = () => {
    dispatch(
      updateFocusTimerLengthMS({
        focusTimerLengthMS: focusTimerLength * 60 * 1000, // convert minutes to milliseconds
      })
    );
    setPage(page + 1);
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
          value={focusTimerLength}
          min="1"
          onChange={e => {
            setFocusTimerLength(e.target.value);
          }}
        ></input>
        <div className="start-page-button">
          <button onClick={handleSetFocusTimerLength}>Next</button>
        </div>
      </div>
    </div>
  );
};

StartPageFocusTimer.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
