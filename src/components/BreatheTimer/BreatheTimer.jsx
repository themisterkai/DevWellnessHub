import { BreakBreathText, BreathCircle } from "../../assets/SVGElements";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { millisToMinutesAndSeconds } from "../../helpers";
import { Link } from "react-router-dom";
import "./BreatheTimer.css"
// This is the component shown in the Dashboard
export const BreatheTimer = () => {
    const isBreatheTimerRunning = useSelector(state => state.breatheTimer.isBreatheTimerRunning);
    const liveBreatheTimerMS = useSelector(state => state.breatheTimer.breatheTimer);
    const liveBreatheTimer = millisToMinutesAndSeconds(liveBreatheTimerMS);
    const breatheTimerCount = useSelector(state => state.breatheTimer.breatheTimerCount);
    
    return(
        <div className="tile-wrapper">
            <Link to="/breathe-timer">
            <div className="tile-main-name">. BREATH</div>
            <div className="breath-timer-done-counter">{breatheTimerCount}</div>
            <div className="breath-circle">
                <BreathCircle />
                {isBreatheTimerRunning ? (
                      <div className="breath-timer-running">{liveBreatheTimer}</div> 
                ) : (
                      <BreakBreathText />
                )}
            </div>
            </Link>
        </div>
    )
};
