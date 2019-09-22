import React, { useState } from "react"
import Switcher from "./Switcher"
import Card from "./Card"
import ThemeContext from "../ThemeContext"

function ThemedCard() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Card />
      <Switcher />
    </ThemeContext.Provider>
  )
}

export default ThemedCard
