import { clsx } from 'clsx';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  handleResetBreatheTimer,
  handleStartBreatheTimer,
} from './BreatheTimerDispatch';
import { millisToMinutesAndSeconds } from '../../helpers';
import useScreenSize from '../../hooks/useScreenSize';
import { ResetIcon } from '../svgs/ResetIcon';
import './BreatheTimerDetailed.css';

export const BreatheTimerDetailed = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useDispatch();

  const breatheTimer = useSelector(state => state.breatheTimer);
  const breatheTimerLengthMS = useSelector(
    state => state.settings.breatheTimerLengthMS
  );

  const percentage = (breatheTimer.breatheTimer / breatheTimerLengthMS) * 100;

  const handleClickTimer = () => {
    if (!breatheTimer.isBreatheTimerRunning) {
      handleStartBreatheTimer(dispatch, breatheTimer, breatheTimerLengthMS);
    }
  };

  const renderBreatheTimerText = () => {
    if (!breatheTimer.isBreatheTimerRunning) {
      return 'S T A R T';
    }
  };

  const breatheTimerClassnames = clsx({
    'breathe-detailed-circular-progress-bar': true,
    pulsing:
      breatheTimer.isBreatheTimerRunning && !breatheTimer.isBreatheTimerPaused,
  });

  return (
    <div className="breathe-detailed-wrapper">
      {isMobile && <Link to="/">Go to Dashboard</Link>}
      <h2>Breathe and Relax</h2>
      <div className="breathe-detailed-reset-container">
        <div
          className="breathe-detailed-reset-icon"
          onClick={() =>
            handleResetBreatheTimer(dispatch, breatheTimerLengthMS)
          }
        >
          <ResetIcon />
        </div>
      </div>
      <div className="breathe-detailed-circular-progress-bar-wrapper">
        <div
          className={breatheTimerClassnames}
          onClick={() => handleClickTimer()}
        >
          <CircularProgressbarWithChildren
            value={percentage}
            circleRatio={0.75}
            styles={buildStyles({
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
              rotation: 1 / 2 + 1 / 8,
            })}
          >
            <h1>{millisToMinutesAndSeconds(breatheTimer.breatheTimer)}</h1>
            <h6>{renderBreatheTimerText()}</h6>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className="breathe-detailed-options">
        <div>Breathe timer done today: {breatheTimer.breatheTimerCount}</div>
      </div>
    </div>
  );
};
