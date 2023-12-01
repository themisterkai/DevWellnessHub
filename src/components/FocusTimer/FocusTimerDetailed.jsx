import { useDispatch, useSelector } from 'react-redux';

import {
  handlePauseFocusTimer,
  handleResetFocusTimer,
  handleStartFocusTimer,
} from './FocusTimerDispatch';
import { millisToMinutesAndSeconds } from '../../helpers';
import './FocusTimerDetailed.css';

export const FocusTimerDetailed = () => {
  const dispatch = useDispatch();

  const focusTimer = useSelector(state => state.focusTimer);
  const focusTimerLengthMS = useSelector(
    state => state.settings.focusTimerLengthMS
  );

  return (
    <div className="focus-detailed-wrapper">
      <h2>Get Focused</h2>
      {millisToMinutesAndSeconds(focusTimer.focusTimer)}
      <div>
        {!focusTimer.isFocusTimerRunning && (
          <button
            onClick={() =>
              handleStartFocusTimer(dispatch, focusTimer, focusTimerLengthMS)
            }
          >
            start timer
          </button>
        )}
        {focusTimer.isFocusTimerRunning && (
          <button onClick={() => handlePauseFocusTimer(dispatch)}>
            {!focusTimer.isFocusTimerPaused ? 'pause' : 'unpause'} timer
          </button>
        )}
        {focusTimer.isFocusTimerRunning && (
          <button
            onClick={() => handleResetFocusTimer(dispatch, focusTimerLengthMS)}
          >
            reset timer
          </button>
        )}
      </div>
      <div># of focus timers: {focusTimer.focusTimerCount}</div>
    </div>
  );
};
