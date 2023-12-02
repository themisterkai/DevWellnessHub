import { useDispatch, useSelector } from 'react-redux';
import useScreenSize from '../../hooks/useScreenSize';
import { Link } from 'react-router-dom';
import {
  handlePauseTimer,
  handleResetTimer,
  handleStartTimer,
} from './FocusTimerDispatch';
import { millisToMinutesAndSeconds } from '../../helpers';
import './FocusTimerDetailed.css';

export const FocusTimerDetailed = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useDispatch();

  const focusTimer = useSelector(state => state.focusTimer);
  const focusTimerLengthMS = useSelector(
    state => state.settings.focusTimerLengthMS
  );

  return (
    <div className="focus-detailed-wrapper">
      {isMobile && <Link to="/">Go to Dashboard</Link>}
      {millisToMinutesAndSeconds(focusTimer.focusTimer)}
      <div>
        {!focusTimer.isFocusTimerRunning && (
          <button
            onClick={() =>
              handleStartTimer(dispatch, focusTimer, focusTimerLengthMS)
            }
          >
            start timer
          </button>
        )}
        {focusTimer.isFocusTimerRunning && (
          <button onClick={() => handlePauseTimer(dispatch)}>
            {!focusTimer.isFocusTimerPaused ? 'pause' : 'unpause'} timer
          </button>
        )}
        {focusTimer.isFocusTimerRunning && (
          <button
            onClick={() => handleResetTimer(dispatch, focusTimerLengthMS)}
          >
            reset timer
          </button>
        )}
      </div>
      <div># of focus timers: {focusTimer.focusTimerCount}</div>
    </div>
  );
};
