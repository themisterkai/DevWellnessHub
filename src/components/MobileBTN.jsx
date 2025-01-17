import useScreenSize from "../hooks/useScreenSize"
import { DashLine } from "../assets/SVGElements"
import { Link } from "react-router-dom"
import './MobileBTN.css'

export const MobileToDashBTN = () => {
    const { isMobile } = useScreenSize();

  return (
    <>
    {isMobile && (
    <>
    <DashLine />
    <Link className="back-dash-link" to="/">. DASHBOARD</Link>
    </>
    )}
    </>
  )
}

export const MobileGoBackBTN = () => {
  const { isMobile } = useScreenSize();

return (
  <>
  {isMobile && (
  <>
  <DashLine />
  <Link className="back-dash-link" to="../">. BACK</Link>
  </>
  )}
  </>
)
}

export const MobileInfoBTN = () => {
  const { isMobile } = useScreenSize();

return (
  <>
  {isMobile && (
  <>
  <DashLine />
  <div className="mobile-back-btn-wrapper">
  <Link className="back-dash-link" to="/settings">. SETTINGS</Link>
  <Link className="back-dash-link" to="/about">. ABOUT</Link>
  </div>
  </>
  )}
  </>
)
}

export const MobileFocusBTN = () => {
  const { isMobile } = useScreenSize();

return (
  <>
  {isMobile && (
  <>
  <DashLine />
  <div className="mobile-back-btn-wrapper">
    <Link className="back-dash-link" to="/">. DASHBOARD</Link>
    <Link className="back-dash-link" to="/about-focus-timer">. FOCUS INFO</Link>
  </div>
  </>
  )}
  </>
)
}

export const MobileBreatheBTN = () => {
  const { isMobile } = useScreenSize();

return (
  <>
  {isMobile && (
  <>
  <DashLine />
  <div className="mobile-back-btn-wrapper">
    <Link className="back-dash-link" to="/">. DASHBOARD</Link>
    <Link className="back-dash-link" to="/about-breathe-timer">. BREATHE INFO</Link>
  </div>
  </>
  )}
  </>
)
}

export const MobileHabitBTN = () => {
  const { isMobile } = useScreenSize();

return (
  <>
  {isMobile && (
  <>
  <DashLine />
  <div className="mobile-back-btn-wrapper">
    <Link className="back-dash-link" to="/">. DASHBOARD</Link>
    <Link className="back-dash-link" to="/about-habit-tracker">. HABIT INFO</Link>
  </div>
  </>
  )}
  </>
)
}

export const MobileMoodBTN = () => {
  const { isMobile } = useScreenSize();

return (
  <>
  {isMobile && (
  <>
  <DashLine />
  <div className="mobile-back-btn-wrapper">
    <Link className="back-dash-link" to="/">. DASHBOARD</Link>
    <Link className="back-dash-link" to="/about-mood-tracker">. MOOD INFO</Link>
  </div>
  </>
  )}
  </>
)
}