import { clsx } from 'clsx';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';

import {
  handleResetBreatheTimer,
  handleStartBreatheTimer,
} from './BreatheTimerDispatch';
import { millisToMinutesAndSeconds } from '../../helpers';
import { ResetIcon } from '../../assets/SVGElements';
import './BreatheTimerDetailed.css';
import { MobileBreatheBTN } from '../MobileBTN';



export const BreatheTimerDetailed = () => {
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
    'focus-detailed-circular-progress-bar': true,
    pulsing:
      breatheTimer.isBreatheTimerRunning && !breatheTimer.isBreatheTimerPaused,
  });

  return (
    <div className="main-wrapper">
      <div className="app-container">
        <header className="main-header">
          <div className="main-app-name">. BREATHE</div>
        </header>
        <h2 className="secondary-header">Breathe and Relax</h2>
        <div
          className="focus-detailed-reset-icon"
          onClick={() =>
            handleResetBreatheTimer(dispatch, breatheTimerLengthMS)
          }
        >
          <ResetIcon />
        </div>
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
            <h1 className="focus-timer-elapsing">
              {millisToMinutesAndSeconds(breatheTimer.breatheTimer)}
            </h1>
            <h6 className="focus-timer-next">{renderBreatheTimerText()}</h6>
          </CircularProgressbarWithChildren>
        </div>
        <p className="focus-done-day">
          Breathe timer done today: {breatheTimer.breatheTimerCount}
        </p>
        <MobileBreatheBTN />
      </div>
    </div>
  );
};
