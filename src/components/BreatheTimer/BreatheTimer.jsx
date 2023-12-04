import { BreakBreathText, BreathCircle } from "../../assets/SVGElements";
import useScreenSize from "../../hooks/useScreenSize";
import { Link } from "react-router-dom";
import "./BreatheTimer.css"
// This is the component shown in the Dashboard
export const BreatheTimer = () => {
    const { isMobile } = useScreenSize();
    
    return(
        <div className="breathe-wrapper">
            {isMobile && <Link to="/breathe-timer">test</Link>}
            <div className="breath-name">. BREATH</div>
            <div className="breath-timer-done-counter">0</div>
            <div className="breath-circle">
                <BreathCircle />
                <BreakBreathText />
            </div>
        </div>
    )
};
