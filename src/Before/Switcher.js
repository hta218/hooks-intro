import React from "react"
import '../switcher.css'
import ThemeContext from '../ThemeContext'

class Switcher extends React.Component {
  render() {
    return <ThemeContext.Consumer>
      {
        ({ theme, toggleTheme }) => {
          let className = theme === 'dark' ? 'toggle-on' : ''
          className += ' toggle'
      
          return (
            <div className={className} id="switch" onClick={toggleTheme}>
              <div className="toggle-text-off">OFF</div>
              <div className="glow-comp"></div>
              <div className="toggle-button"></div>
              <div className="toggle-text-on">ON</div>
            </div>
          )
        }
      }
    </ThemeContext.Consumer>
  }
}

Switcher.contextType = ThemeContext

export default Switcher