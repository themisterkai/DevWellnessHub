import { useDispatch, useSelector } from 'react-redux';

import {
  handlePauseBreatheTimer,
  handleResetBreatheTimer,
  handleStartBreatheTimer,
} from './BreatheTimerDispatch';
import { millisToMinutesAndSeconds } from '../../helpers';
import './BreatheTimerDetailed.css';

export const BreatheTimerDetailed = () => {
  const dispatch = useDispatch();

  const breatheTimer = useSelector(state => state.breatheTimer);
  const breatheTimerLengthMS = useSelector(
    state => state.settings.breatheTimerLengthMS
  );

  return (
    <div className="breathe-detailed-wrapper">
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
  );
};
