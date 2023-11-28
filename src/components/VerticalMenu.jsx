//Vertical Menu for desktop & tablet only
import './VerticalMenu.css'; // You'll need to create this CSS file


export const  VerticalMenu = ({onMenuClick}) => {

    return (
        
        <div className="vertical-menu-bar">
            <div className="menu-items">
              <span className="dashboard-link" onClick={() => onMenuClick('dashboard')}>DASHBOARD</span>
              <div className="functionality-menu-items">
                <span className="focus" onClick={() => onMenuClick('focus')}>. FOCUS</span>
                <span className="mood" onClick={() => onMenuClick('mood')}>. MOOD</span>
                <span className="habit" onClick={() => onMenuClick('habit')}>. HABIT</span>
                <span className="breath" onClick={() => onMenuClick('breath')}>. BREATH</span>
              </div>
              <span className="settings-link">SETTINGS</span>
            </div>
        </div>


      );
 };