import useScreenSize from '../../hooks/useScreenSize';
import { Link } from 'react-router-dom';
import "./BreatheTimerDetailed.css"

export const BreatheTimerDetailed = () => {
    const { isMobile } = useScreenSize();

    return (
        <div className="breathe-detailed-wrapper">
            {isMobile && <Link to="/">Go to Dashboard</Link>}
        </div>
    );
};
