//This is the homepage for Desktop and Tablet,
//which is composed by VerticalMenu + Dashboard + HistoricalCalDetailed;
import { useState } from 'react';

import { Dashboard } from './Dashboard';
import { SettingsPage } from './SettingsPage';
import { BreatheTimerDetailed } from '../components/BreatheTimer/BreatheTimerDetailed';
import { BreatheTimerRenderless } from '../components/BreatheTimer/BreatheTimerRenderless';
import { FocusTimerDetailed } from '../components/FocusTimer/FocusTimerDetailed';
import { FocusTimerRenderless } from '../components/FocusTimer/FocusTimerRenderless';
import { HistoricalCalDetailed } from '../components/HistoricalCal/HistoricalCalDetailed';
import { MoodTrackerDetailed } from '../components/MoodTracker/MoodTrackerDetailed';
import { HabitTrackerDetailed } from '../components/HabitTracker/HabitTrackerDetailed';
import { VerticalMenu } from '../components/VerticalMenu';
import useScreenSize from '../hooks/useScreenSize';
import './DesktopHomepage.css';

export const DesktopHomepage = () => {
  //Here the logic if to switch on mobile or on desktop with
  //conditional rendering of which components (better than doing it in the App.jsx)
  const { isMobile } = useScreenSize();
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleMenuClick = page => {
    setCurrentPage(page);
  };
  
  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };
    
    return (
        <>
          <FocusTimerRenderless />
          <BreatheTimerRenderless />
            {isMobile ? (
                <Dashboard />
            ) : (
                //Import VerticalMenu
                //Import Dashboard
                //Import HistoricalCalDetailed
                <div className="desktop-wrapper">
                    <VerticalMenu onMenuClick={handleMenuClick} />
                        <div>
                            {currentPage === 'dashboard' && <Dashboard/>}
                            {currentPage === 'focus' && <FocusTimerDetailed />}
                            {currentPage === 'mood' && <MoodTrackerDetailed />}
                            {currentPage === 'habit' && <HabitTrackerDetailed />}
                            {currentPage === 'breath' && <BreatheTimerDetailed />}
                            {currentPage === 'settings' && <SettingsPage />}
                        </div>
                        <HistoricalCalDetailed/>
                </div>
            )}
        </>   
    );
};
