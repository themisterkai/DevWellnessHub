import {
  pauseFocusTimer,
  resetFocusTimer,
  setFocusTimer,
  startFocusTimer,
} from '../../reducers/focusTimer';

export const handleStartTimer = (
  dispatch,
  focusTimerState,
  focusTimerLengthMS
) => {
  if (
    !focusTimerState.isfocusTimerStateRunning &&
    !focusTimerState.isFocusTimerPaused
  ) {
    dispatch(setFocusTimer({ focusTimer: focusTimerLengthMS }));
    dispatch(startFocusTimer({}));
  } else {
    dispatch(startFocusTimer({}));
  }
};

export const handlePauseTimer = dispatch => {
  dispatch(pauseFocusTimer({}));
};

export const handleResetTimer = (dispatch, focusTimerLengthMS) => {
  dispatch(setFocusTimer({ focusTimer: focusTimerLengthMS }));
  dispatch(resetFocusTimer({}));
};
