import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { endBreatheTimer, setBreatheTimer } from '../../reducers/breatheTimer';

export const BreatheTimerRenderless = () => {
  const dispatch = useDispatch();

  const breatheTimer = useSelector(state => state.breatheTimer);
  const breatheTimerLengthMS = useSelector(
    state => state.settings.breatheTimerLengthMS
  );

  const getTime = () => {
    if (breatheTimer.breatheTimer > 0) {
      dispatch(
        setBreatheTimer({ breatheTimer: breatheTimer.breatheTimer - 1000 })
      );
    } else {
      dispatch(endBreatheTimer({}));
      dispatch(setBreatheTimer({ breatheTimer: breatheTimerLengthMS }));
      dispatch({ type: 'SAVE_DATA' });
    }
  };

  useEffect(() => {
    let interval;

    if (
      breatheTimer.isBreatheTimerRunning &&
      !breatheTimer.isBreatheTimerPaused
    ) {
      interval = setInterval(() => getTime(), 1000);
    }

    return () => clearInterval(interval);
  }, [
    breatheTimer.breatheTimer,
    breatheTimer.isBreatheTimerRunning,
    breatheTimer.isBreatheTimerPaused,
  ]);

  useEffect(() => {
    dispatch(setBreatheTimer({ breatheTimer: breatheTimerLengthMS }));
  }, []);
};
