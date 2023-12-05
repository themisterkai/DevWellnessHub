import { useDispatch, useSelector } from 'react-redux';
import useScreenSize from '../../hooks/useScreenSize';
import { Link } from 'react-router-dom';
import {
  handlePauseBreatheTimer,
  handleResetBreatheTimer,
  handleStartBreatheTimer,
} from './BreatheTimerDispatch';
import { millisToMinutesAndSeconds } from '../../helpers';
import './BreatheTimerDetailed.css';

export const BreatheTimerDetailed = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useDispatch();

  const breatheTimer = useSelector(state => state.breatheTimer);
  const breatheTimerLengthMS = useSelector(
    state => state.settings.breatheTimerLengthMS
  );

  return (
    <div className="main-wrapper">
      <div className="app-container">
      {isMobile && <Link to="/">Go to Dashboard</Link>}
      <h2>Breathe and Relax</h2>
      {millisToMinutesAndSeconds(breatheTimer.breatheTimer)}
      <div>
        {!breatheTimer.isBreatheTimerRunning && (
          <button
            onClick={() =>
              handleStartBreatheTimer(
                dispatch,
                breatheTimer,
                breatheTimerLengthMS
              )
            }
          >
            start timer
          </button>
        )}
        {breatheTimer.isBreatheTimerRunning && (
          <button onClick={() => handlePauseBreatheTimer(dispatch)}>
            {!breatheTimer.isBreatheTimerPaused ? 'pause' : 'unpause'} timer
          </button>
        )}
        {breatheTimer.isBreatheTimerRunning && (
          <button
            onClick={() =>
              handleResetBreatheTimer(dispatch, breatheTimerLengthMS)
            }
          >
            reset timer
          </button>
        )}
      </div>
      <div># of breathe timers: {breatheTimer.breatheTimerCount}</div>
      </div>
    </div>
  );
};
