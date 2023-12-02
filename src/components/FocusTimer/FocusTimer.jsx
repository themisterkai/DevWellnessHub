// This is the component shown in the Dashboard
import { FocusCircle, SetFocusText } from "../../assets/SVGElements";
import "./FocusTimer.css"

export const FocusTimer = () => {
    
    return(
        <div className="focus-wrapper">
                <div className="focus-name">. FOCUS</div>          
                <div className="focus-timer-done-counter">0</div>
                <div className="focus-circle">
                    <FocusCircle />
                    <SetFocusText />
                </div>
                
        </div>
    )
};
