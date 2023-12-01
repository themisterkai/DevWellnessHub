import {
  pauseFocusTimer,
  resetFocusTimer,
  setFocusTimer,
  startFocusTimer,
} from '../../reducers/focusTimer';

export const handleStartFocusTimer = (
  dispatch,
  focusTimerState,
  focusTimerLengthMS
) => {
  if (
    !focusTimerState.isFocusTimerRunning &&
    !focusTimerState.isFocusTimerPaused
  ) {
    dispatch(setFocusTimer({ focusTimer: focusTimerLengthMS }));
    dispatch(startFocusTimer({}));
  } else {
    dispatch(startFocusTimer({}));
  }
};

export const handlePauseFocusTimer = dispatch => {
  dispatch(pauseFocusTimer({}));
};

export const handleResetFocusTimer = (dispatch, focusTimerLengthMS) => {
  dispatch(setFocusTimer({ focusTimer: focusTimerLengthMS }));
  dispatch(resetFocusTimer({}));
};
