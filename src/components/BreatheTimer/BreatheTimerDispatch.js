import {
  pauseBreatheTimer,
  resetBreatheTimer,
  setBreatheTimer,
  startBreatheTimer,
} from '../../reducers/breatheTimer';

export const handleStartBreatheTimer = (
  dispatch,
  breatheTimerState,
  breatheTimerLengthMS
) => {
  if (
    !breatheTimerState.isBreatheTimerRunning &&
    !breatheTimerState.isBreatheTimerPaused
  ) {
    dispatch(setBreatheTimer({ breatheTimer: breatheTimerLengthMS }));
    dispatch(startBreatheTimer({}));
  } else {
    dispatch(startBreatheTimer({}));
  }
};

export const handlePauseBreatheTimer = dispatch => {
  dispatch(pauseBreatheTimer({}));
};

export const handleResetBreatheTimer = (dispatch, breatheTimerLengthMS) => {
  dispatch(setBreatheTimer({ breatheTimer: breatheTimerLengthMS }));
  dispatch(resetBreatheTimer({}));
};
