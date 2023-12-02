// This is the component shown in the Dashboard
import { FocusCircle, SetFocusText } from "../../assets/SVGElements";
import useScreenSize from "../../hooks/useScreenSize";
import { Link } from "react-router-dom";
import "./FocusTimer.css"

export const FocusTimer = () => {
    const { isMobile } = useScreenSize();
    
    return(
        <div className="focus-wrapper">
             {isMobile && <Link to="/focus-timer">test</Link>}
                <div className="focus-name">. FOCUS</div>          
                <div className="focus-timer-done-counter">0</div>
                <div className="focus-circle">
                    <FocusCircle />
                    <SetFocusText />
                </div>
        </div>
    )
};
