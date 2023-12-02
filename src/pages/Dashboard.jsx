//Dashboard that loads in mobile & it's used
//as a component for Desktop/Tablet
import { useSelector } from 'react-redux';
import { DashLine, SettingsIcon } from "../assets/SVGElements";
import { FocusTimer } from '../components/FocusTimer/FocusTimer';
import { HabitTracker } from '../components/HabitTracker/HabitTracker';
import { MoodTracker } from '../components/MoodTracker/MoodTracker';
import { BreatheTimer } from '../components/BreatheTimer/BreatheTimer';
import "./Dashboard.css"

export const Dashboard = () => {
    const settingsState = useSelector(state => state.settings);
    //Import Header
    //Import HistoricalCal
    //Import FocusTimer, Habit,Tracker, MoodTracker, BreatheTimer
    return (
            <div className="dashboard-wrapper">
                <div className="app-container">
                    <header className="dashboard-header">
                        <div className="main-app-name">DevWellnessHub</div>
                        <SettingsIcon /> 
                    </header>
                    <h1 className="dash-user-name">Welcome {settingsState.name}, ready for today's session?</h1>
                    <DashLine />
                    <div className="app-wrapper">
                            <FocusTimer />
                            <HabitTracker />
                            <BreatheTimer />
                            <MoodTracker />
                    </div>
                </div>
            </div>

    );
};
