import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

import { FocusCircle } from '../../assets/SVGElements';
import { millisToMinutesAndSeconds } from '../../helpers';
import './FocusTimer.css';

// This is the component shown in the Dashboard
export const FocusTimer = () => {
  const isFocusTimerRunning = useSelector(
    state => state.focusTimer.isFocusTimerRunning
  );
  const liveFocusTimerMS = useSelector(state => state.focusTimer.focusTimer);
  const liveFocusTimer = millisToMinutesAndSeconds(liveFocusTimerMS);
  const focusTimerCount = useSelector(
    state => state.focusTimer.focusTimerCount
  );

  return (
    <div className="tile-wrapper">
      <Link to="/focus-timer">
        <div className="tile-main-name">. FOCUS</div>
        <div className="focus-timer-done-counter">{focusTimerCount}</div>
        <div className="focus-circle">
          <FocusCircle />
          <div className="focus-circle-text-wrapper">
            <div className="focus-timer-text">
              {isFocusTimerRunning ? liveFocusTimer : 'SET'}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
