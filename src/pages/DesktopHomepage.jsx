//This is the homepage for Desktop and Tablet,
//which is composed by VerticalMenu + Dashboard + HistoricalCalDetailed;
import { useState } from 'react';

import { Dashboard } from './Dashboard';
import { BreatheTimerDetailed } from '../components/BreatheTimer/BreatheTimerDetailed';
import { FocusTimerDetailed } from '../components/FocusTimer/FocusTimerDetailed';
import { FocusTimerRenderless } from '../components/FocusTimer/FocusTimerRenderless';
import { HabitTrackerDetailed } from '../components/HabitTracker/HabitTrackerDetailed';
import { HistoricalCalDetailed } from '../components/HistoricalCal/HistoricalCalDetailed';
import { MoodTrackerDetailed } from '../components/MoodTracker/MoodTrackerDetailed';
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

  return (
    <div>
      {isMobile ? (
        <Dashboard />
      ) : (
        //Import VerticalMenu
        //Import Dashboard
        //Import HistoricalCalDetailed
        <div className="desktop-wrapper">
          <VerticalMenu onMenuClick={handleMenuClick} />
          <div>
            <FocusTimerRenderless />
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'focus' && <FocusTimerDetailed />}
            {currentPage === 'mood' && <MoodTrackerDetailed />}
            {currentPage === 'habit' && <HabitTrackerDetailed />}
            {currentPage === 'breath' && <BreatheTimerDetailed />}
          </div>
          <HistoricalCalDetailed />
        </div>
      )}
    </div>
  );
};
