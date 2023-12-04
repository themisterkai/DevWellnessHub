import { useDispatch, useSelector } from 'react-redux';
import useScreenSize from '../../hooks/useScreenSize';
import { Link } from 'react-router-dom';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import {
  handlePauseFocusTimer,
  handleResetFocusTimer,
  handleStartFocusTimer,
} from './FocusTimerDispatch';
import { ResetIcon } from '../svgs/ResetIcon';
import { millisToMinutesAndSeconds } from '../../helpers';
import './FocusTimerDetailed.css';

export const FocusTimerDetailed = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useDispatch();

  const focusTimer = useSelector(state => state.focusTimer);
  const focusTimerLengthMS = useSelector(
    state => state.settings.focusTimerLengthMS
  );

  const percentage = (focusTimer.focusTimer / focusTimerLengthMS) * 100;

  const handleClickTimer = () => {
    if (!focusTimer.isFocusTimerRunning) {
      handleStartFocusTimer(dispatch, focusTimer, focusTimerLengthMS);
    } else {
      handlePauseFocusTimer(dispatch);
    }
  };

  const renderFocusTimerText = () => {
    if (!focusTimer.isFocusTimerRunning) {
      return 'S T A R T';
    } else if (
      focusTimer.isFocusTimerRunning &&
      !focusTimer.isFocusTimerPaused
    ) {
      return 'P A U S E';
    } else if (
      focusTimer.isFocusTimerRunning &&
      focusTimer.isFocusTimerPaused
    ) {
      return 'R E S U M E';
    }
  };

  return (
    <div className="focus-detailed-wrapper">

      {isMobile && <Link to="/">Go to Dashboard</Link>}
      <h2>Get Focused</h2>
      <div className="focus-detailed-reset-container">
        <div
          className="focus-detailed-reset-icon"
          onClick={() => handleResetFocusTimer(dispatch, focusTimerLengthMS)}
        >
          <ResetIcon />
        </div>
      </div>
      <div className="focus-detailed-circular-progress-bar-wrapper">
        <div
          className="focus-detailed-circular-progress-bar"
          onClick={() => handleClickTimer()}
        >
          <CircularProgressbarWithChildren
            value={percentage}
            styles={buildStyles({
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
            })}
          >
            <h1>{millisToMinutesAndSeconds(focusTimer.focusTimer)}</h1>
            <h6>{renderFocusTimerText()}</h6>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className="focus-detailed-options">
        <div>Focus timers done today: {focusTimer.focusTimerCount}</div>
      </div>
    </div>
  );
};
