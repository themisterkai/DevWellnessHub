import { useDispatch, useSelector } from 'react-redux';

import {
  handlePauseTimer,
  handleResetTimer,
  handleStartTimer,
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
      {millisToMinutesAndSeconds(focusTimer.focusTimer)}
      <div>
        <button
          onClick={() =>
            handleStartTimer(dispatch, focusTimer, focusTimerLengthMS)
          }
        >
          start timer
        </button>
        <button onClick={() => handlePauseTimer(dispatch)}>pause timer</button>
        <button onClick={() => handleResetTimer(dispatch, focusTimerLengthMS)}>
          reset timer
        </button>
      </div>
      <div>Number of focus timers: {focusTimer.focusTimerCount}</div>
    </div>
  );
};
