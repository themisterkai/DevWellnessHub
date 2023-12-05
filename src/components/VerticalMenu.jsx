//Vertical Menu for desktop & tablet only
import { Link } from 'react-router-dom';
import './VerticalMenu.css'; // You'll need to create this CSS file


export const  VerticalMenu = () => {

    return (
        
        <div className="vertical-menu-bar">
            <div className="menu-items">
              <Link className="dashboard-link" to="/">DASHBOARD</Link>
              <div className="functionality-menu-items">
                <Link className="focus" to="/focus-timer">. FOCUS</Link>
                <Link className="mood" to="/mood-tracker">. MOOD</Link>
                <Link className="habit" to="/habit-tracker">. HABIT</Link>
                <Link className="breath" to="/breathe-timer">. BREATHE</Link>
              </div>
              <Link className="settings-link" to="/settings">SETTINGS</Link>
            </div>
        </div>


      );
 };