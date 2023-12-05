import { MoodDown, MoodStableLine, MoodUp } from "../../assets/SVGElements";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./MoodTracker.css"
// This is the component shown in the Dashboard
export const MoodTracker = () => {
    const moodLevel = useSelector(state => state.mood.moodLevel);
    const energyLevel = useSelector(state => state.mood.energyLevel);
    const overwhelmedLevel = useSelector(state => state.mood.overwhelmedLevel);

    const totalLevel = moodLevel + energyLevel + overwhelmedLevel;
    console.log(typeof totalLevel);


    return(
        <div className="tile-wrapper">
            <div className="tile-main-name">. MOOD</div>
            {totalLevel > 8 && (
               <div className="moods-wrapper">
               <MoodUp />
               </div>
            )}
            {totalLevel === 8 && (
                <div className="mood-lines-wrapper">
                <MoodStableLine />
                <MoodStableLine />
                </div>
            )}
            {totalLevel < 8 && (
                <div className="moods-wrapper">
                <MoodDown />
                </div>
            )}
        </div>
    )
};
