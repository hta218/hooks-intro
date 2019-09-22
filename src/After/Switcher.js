import React, { useContext } from "react"
import "../switcher.css"
import ThemeContext from "../ThemeContext"

function Switcher() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  let className = theme === "dark" ? "toggle-on" : ""
  className += " toggle"

  return (
    <div className={className} id="switch" onClick={toggleTheme}>
      <div className="toggle-text-off">OFF</div>
      <div className="glow-comp"></div>
      <div className="toggle-button"></div>
      <div className="toggle-text-on">ON</div>
    </div>
  )
}

export default Switcher
