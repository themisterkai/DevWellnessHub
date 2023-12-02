import { BreakBreathText, BreathCircle } from "../../assets/SVGElements";
import "./BreatheTimer.css"
// This is the component shown in the Dashboard
export const BreatheTimer = () => {

    return(
        <div className="breathe-wrapper">
            <div className="breath-name">. BREATH</div>
            <div className="breath-timer-done-counter">0</div>
            <div className="breath-circle">
                <BreathCircle />
                <BreakBreathText />
            </div>
        </div>
    )
};
