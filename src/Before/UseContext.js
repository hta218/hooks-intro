import React from "react"
import Switcher from "./Switcher"
import Card from "./Card"
import ThemeContext from '../ThemeContext'

class ThemedCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "dark",
      toggleTheme: this.toggleTheme
    }
  }

  toggleTheme = () => {
    this.setState(prevState => {
      return { theme: prevState.theme === "light" ? "dark" : "light" }
    })
  }

  render() {

    return (
      <ThemeContext.Provider value={this.state}>
        <Card />
        <Switcher/>
      </ThemeContext.Provider>
    )
  }
}

ThemedCard.contextType = ThemeContext

export default ThemedCard
