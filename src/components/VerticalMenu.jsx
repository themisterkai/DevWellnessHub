//Vertical Menu for desktop & tablet only
import './VerticalMenu.css'; // You'll need to create this CSS file


export const  VerticalMenu = () => {

    return (
        
        <div className="vertical-menu-bar">
            <div className="menu-items">
              <span className="dashboard-link">DASHBOARD</span>
              <div className="functionality-menu-items">
                <span className="focus">. FOCUS</span>
                <span className="mood">. MOOD</span>
                <span className="habit">. HABIT</span>
                <span className="breath">. BREATH</span>
              </div>
              <span className="settings-link">SETTINGS</span>
            </div>
        </div>


      );
 };