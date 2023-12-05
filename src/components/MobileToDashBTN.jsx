import useScreenSize from "../hooks/useScreenSize"
import { DashLine } from "../assets/SVGElements"
import { Link } from "react-router-dom"
import './MobileToDashBTN.css'

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
