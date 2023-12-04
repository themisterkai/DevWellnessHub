import { MoodStableLine } from "../../assets/SVGElements";
import "./MoodTracker.css"
// This is the component shown in the Dashboard
export const MoodTracker = () => {
    return(
        <div className="mood-wrapper">
            <div className="mood-name">. MOOD</div>
            <div className="mood-lines-wrapper">
                <MoodStableLine />
                <MoodStableLine />
            </div>
        </div>
    )
};
