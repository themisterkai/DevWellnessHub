import { useDispatch, useSelector } from 'react-redux';
import { MobileToDashBTN } from '../MobileToDashBTN';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import {
  handlePauseFocusTimer,
  handleResetFocusTimer,
  handleStartFocusTimer,
} from './FocusTimerDispatch';
import { getYesterdayDate, millisToMinutesAndSeconds } from '../../helpers';
import { InfoIcon, ResetIcon } from '../../assets/SVGElements';
import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';
import './FocusTimerDetailed.css';

export const FocusTimerDetailed = () => {
  const dispatch = useDispatch();
  const yesterdayDate = getYesterdayDate();
  const { isMobile } = useScreenSize();

  const focusTimer = useSelector(state => state.focusTimer);
  const focusTimerLengthMS = useSelector(
    state => state.settings.focusTimerLengthMS
  );

  const historical = useSelector(state => state.historical.historicalData);
  const dataYesterday = historical[yesterdayDate];

  const historicalFocusData = Object.entries(historical).reduce(
    (acc, curr) => {
      acc.count += 1;
      acc.done += curr[1].focusTimer.focusTimerCount;
      return acc;
    },
    {
      done: 0,
      count: 0,
    }
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
    <div className="main-wrapper">
      <div className="app-container">
        <header className="main-header">
          <div className="main-app-name">. FOCUS</div>
          {isMobile && (
            <div className="info-button">
              <Link to="/about-focus-timer">
                <InfoIcon />
              </Link>
            </div>
          )}
        </header>
        <h2 className="secondary-header">Get focused now!</h2>
        <div
          className="focus-detailed-reset-icon"
          onClick={() => handleResetFocusTimer(dispatch, focusTimerLengthMS)}
        >
          <ResetIcon />
        </div>
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
            <h1 className="focus-timer-elapsing">
              {millisToMinutesAndSeconds(focusTimer.focusTimer)}
            </h1>
            <h6 className="focus-timer-next">{renderFocusTimerText()}</h6>
          </CircularProgressbarWithChildren>
        </div>
        <p className="focus-done-day">
          Focus timer done today: {focusTimer.focusTimerCount}
        </p>
        <div className="focus-history">
          {dataYesterday != null && (
            <div className="focus-history-yesterday">
              Yesterday&apos;s data:
              <p />
              Count: {dataYesterday.focusTimer.focusTimerCount}
            </div>
          )}
          {historicalFocusData.count != 0 && (
            <div className="focus-history-overall">
              Overall data:
              <p />
              Average per day:{' '}
              {historicalFocusData.done / historicalFocusData.count}
            </div>
          )}
        </div>
        <MobileToDashBTN />
      </div>
    </div>
  );
};
