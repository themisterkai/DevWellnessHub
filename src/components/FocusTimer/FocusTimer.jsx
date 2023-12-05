// This is the component shown in the Dashboard
import { FocusCircle, SetFocusText } from "../../assets/SVGElements";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useScreenSize from "../../hooks/useScreenSize";
import { millisToMinutesAndSeconds } from "../../helpers";
import { Link } from "react-router-dom";
import "./FocusTimer.css"

export const FocusTimer = () => {
    const { isMobile } = useScreenSize();
    const isFocusTimerRunning = useSelector(state => state.focusTimer.isFocusTimerRunning);
    const liveFocusTimerMS = useSelector(state => state.focusTimer.focusTimer);
    const liveFocusTimer = millisToMinutesAndSeconds(liveFocusTimerMS);
    const focusTimerCount = useSelector(state => state.focusTimer.focusTimerCount);
    

    return(
        <div className="focus-wrapper">
             {isMobile && <Link to="/focus-timer">test</Link>}
                <div className="focus-name">. FOCUS</div>          
                <div className="focus-timer-done-counter">{focusTimerCount}</div>
                <div className="focus-circle">
                    <FocusCircle />
                    {isFocusTimerRunning ? (
                      <div className="focus-timer-running">{liveFocusTimer}</div> 
                    ) : (
                      <SetFocusText />
                    )}
                </div>
        </div>
    )
};
