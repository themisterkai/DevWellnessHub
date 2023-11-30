import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { endFocusTimer, setFocusTimer } from '../../reducers/focusTimer';

export const FocusTimerRenderless = () => {
  const dispatch = useDispatch();

  const focusTimer = useSelector(state => state.focusTimer);
  const focusTimerLengthMS = useSelector(
    state => state.settings.focusTimerLengthMS
  );

  const getTime = () => {
    if (focusTimer.focusTimer > 0) {
      dispatch(setFocusTimer({ focusTimer: focusTimer.focusTimer - 1000 }));
    } else {
      dispatch(endFocusTimer({}));
      dispatch(setFocusTimer({ focusTimer: focusTimerLengthMS }));
      dispatch({ type: 'SAVE_DATA' });
    }
  };

  useEffect(() => {
    let interval;

    if (focusTimer.isFocusTimerRunning && !focusTimer.isFocusTimerPaused) {
      interval = setInterval(() => getTime(), 1000);
    }

    return () => clearInterval(interval);
  }, [
    focusTimer.focusTimer,
    focusTimer.isFocusTimerRunning,
    focusTimer.isFocusTimerPaused,
  ]);

  useEffect(() => {
    dispatch(setFocusTimer({ focusTimer: focusTimerLengthMS }));
  }, []);
};
