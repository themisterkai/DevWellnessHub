//This is the homepage for Desktop and Tablet,
//which is composed by VerticalMenu + Dashboard + HistoricalCalDetailed;
import { HistoricalCalDetailed } from "../components/HistoricalCal/HistoricalCalDetailed";
import { VerticalMenu } from "../components/VerticalMenu";
import { Dashboard } from "./Dashboard";
import "./DesktopHomepage.css"


export const DesktopHomepage = () => {
    //Here the logic if to switch on mobile or on desktop with
    //conditional rendering of which components (better than doing it in the App.jsx)
    
    return (

        //Import VerticalMenu
        //Import Dashboard
        //Import HistoricalCalDetailed
        <div className="desktop-wrapper">
            <VerticalMenu/>
            <Dashboard/>
            <HistoricalCalDetailed/>
        </div>
    );
    
};
